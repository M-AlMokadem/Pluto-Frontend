import { NgModule } from '@angular/core';
// import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
// import { SatDatepickerModule, SatNativeDateModule } from 'saturn-datepicker';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminHomePageComponent } from './shared/admin-home-page/admin-home-page.component';
import { AdminMainNavComponent } from './shared/admin-main-nav/admin-main-nav.component';
import { DemoMaterialModule } from '../shared/demo-material-module';
import { AdminHeaderComponent } from './shared/admin-header/admin-header.component';
import { AdminSidebarComponent } from './shared/admin-sidebar/admin-sidebar.component';
import { AdminMenuItems } from './shared/admin-menu-items/admin-menu-items';
import { SpinnerComponent } from '../shared/spinner.component';
import { AppModule } from '../app.module';
import { RouterModule } from '@angular/router';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [
    AdminMainNavComponent,
    AdminHomePageComponent,
    AdminHeaderComponent,
    AdminSidebarComponent,
    SpinnerComponent
  ],
  imports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    RouterModule.forChild(AdminRoutingModule),
    // AngularMaterialModule,
    // AdminRoutingModule,
    // SatDatepickerModule,
    // SatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    // MatSelectModule,
    DemoMaterialModule,
    AppModule
  ],
  exports: [
    // NumberDecimalsOnlyDirective, EnglishTextDirective, NumbersOnlyDirective, SpecialCharDirective, TrimDirective
  ],
  providers: [AdminMenuItems]

})
export class AdminModule { }
