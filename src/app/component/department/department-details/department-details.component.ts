import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/app/environments/environment';
import { HttpServiceService } from 'src/app/service/http-service.service';
import { DeleteHandlerComponent } from '../../common/delete-handler/delete-handler.component';
import { Employee } from '../../employee/model/employee';
import { Department } from '../model/department';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css'],
  providers: [DeleteHandlerComponent],
})
export class DepartmentDetailsComponent {
  departments: Department[] = [];
  employees: Employee[] = [];

  constructor(
    private httpService: HttpServiceService,
    private deleteHandler: DeleteHandlerComponent,
    private router: Router
  ) {}

  ngOnInit() {
    this.refreshDepartmentList();
  }

  refreshDepartmentList() {
    this.httpService
      .get(environment.departmentUrl + '/list')
      .subscribe((data: Department[]) => {
        this.departments = data;
      });
  }

  async deleteDepartment(department: Department) {
    await this.getEmployeesOfDepartment(department);
    const deleteData = {
      url: environment.departmentUrl,
      conetent: department,
      childContent: this.employees
    };
    this.deleteHandler.openDialog(deleteData).subscribe(() => {
      console.log('refreh data after deleting');
      this.refreshDepartmentList();
    });
  }

  editDepartment(department: Department){
    this.router.navigate(['/department/create'], {state:department});
  }

  async getEmployeesOfDepartment(department: Department){
    this.httpService
      .get(environment.employeesOfDepartment + '/' + department.name)
      .subscribe((data: Employee[]) => {
        this.employees = data;
        return this.employees;
      });
  }

}
