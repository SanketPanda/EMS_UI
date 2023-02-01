import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './component/side-nav/side-nav.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { DepartmentComponent } from './component/department/department.component';
import { DepartmentDetailsComponent } from './component/department/department-details/department-details.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { EmployeeDetailsComponent } from './component/employee/employee-details/employee-details.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { RoleComponent } from './component/role/role.component';
import { RoleDetailsComponent } from './component/role/role-details/role-details.component';
import { StaffLeaveComponent } from './component/staff-leave/staff-leave.component';
import { StaffLeaveDetailsComponent } from './component/staff-leave/staff-leave-details/staff-leave-details.component';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { ErrorHandlerComponent } from './component/common/error-handler/error-handler.component';
import { DeleteHandlerComponent } from './component/common/delete-handler/delete-handler.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    DepartmentComponent,
    DepartmentDetailsComponent,
    DashboardComponent,
    EmployeeDetailsComponent,
    EmployeeComponent,
    RoleComponent,
    RoleDetailsComponent,
    StaffLeaveComponent,
    StaffLeaveDetailsComponent,
    ErrorHandlerComponent,
    DeleteHandlerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatExpansionModule,
    MatTableModule,
    HttpClientModule,
    MatCardModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatGridListModule,
    MatSelectModule,
    FormsModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
