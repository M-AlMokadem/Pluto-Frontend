import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AdminMainNavComponent } from 'src/app/admin-view/shared/admin-main-nav/admin-main-nav.component';
import { AdminHomePageComponent } from './shared/admin-home-page/admin-home-page.component';
import { FullComponent } from '../layouts/full/full.component';
import { AppHeaderComponent } from "../layouts/full/header/header.component";
import { AppSidebarComponent } from "../layouts/full/sidebar/sidebar.component";

export const AdminRoutingModule: Routes = [
  {
    path: '',
    component: AdminMainNavComponent,
    // canActivate: [AuthGuard],
    data: {
      // roles: [Role.Admin, Role.MedicalAdmin, Role.PensionAdmin, Role.PhoneAdmin, Role.SimCardAdmin, Role.NurseryAdmin]
    },
    children: [
      // canActivate: [AuthGuard], data: { roles: [Role.SuccessFactorAdmin] }
      {
        path: 'home',
        component: AdminHomePageComponent,
      },
      //  , canActivate: [AuthGuard], data: { roles: [Role.SimCardAdmin] }
      // {
      //   path: '',
      //   redirectTo: 'admin',
      //   pathMatch: 'full'
      // }
    ]
  }
];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class AdminRoutingModule { }
