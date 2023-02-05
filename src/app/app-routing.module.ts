import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { DepartmentDetailsComponent } from './component/department/department-details/department-details.component';
import { DepartmentComponent } from './component/department/department.component';
import { EmployeeDetailsComponent } from './component/employee/employee-details/employee-details.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { NoticeDetailsComponent } from './component/notice/notice-details/notice-details.component';
import { NoticeComponent } from './component/notice/notice.component';
import { RoleDetailsComponent } from './component/role/role-details/role-details.component';
import { RoleComponent } from './component/role/role.component';
import { StaffLeaveDetailsComponent } from './component/staff-leave/staff-leave-details/staff-leave-details.component';
import { StaffLeaveComponent } from './component/staff-leave/staff-leave.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'employee/create', component: EmployeeComponent },
  { path: 'employee/details', component: EmployeeDetailsComponent },
  { path: 'role/create', component: RoleComponent },
  { path: 'role/details', component: RoleDetailsComponent },
  { path: 'department/create', component: DepartmentComponent },
  { path: 'department/details', component: DepartmentDetailsComponent },
  { path: 'staff-leave/create', component: StaffLeaveComponent },
  { path: 'staff-leave/details', component: StaffLeaveDetailsComponent },
  { path: 'notice/create', component: NoticeComponent },
  { path: 'notice/details', component: NoticeDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
