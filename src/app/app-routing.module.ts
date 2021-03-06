import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullComponent } from './layouts/full/full.component';
import { HomeComponent } from './userView/home/home.component';
import { LoginComponent } from './Components/auth/login/login.component';


const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren:
          () => import('./material-component/material.module').then(m => m.MaterialComponentsModule)
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      // {
      //   path: 'admin',
      //   loadChildren: () => import('../app/admin-view/admin.module').then(m => m.AdminModule)
      // },
    ],
  },
  {
    path: 'login', component: LoginComponent,
    // canActivate: [LoginGuard]
  },
  {
    path: 'admin',
    data: {
      // roles: [Role.Admin]
    },
    // loadChildren: () => import('../app/admin-view/admin.module').then((m) => m.AdminModule),
    loadChildren: () => import('../app/Components/auth/auth.module').then((m) => m.AuthModule),

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
