import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/app/environments/environment';
import { HttpServiceService } from 'src/app/service/http-service.service';
import { DeleteHandlerComponent } from '../common/delete-handler/delete-handler.component';
import { Department } from '../department/model/department';
import { Employee } from '../employee/model/employee';
import { Role } from '../role/model/role';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  totalEmployee: number = 0;
  totalDepartment: number = 0;
  totalRole: number = 0;

  constructor(
    private httpService: HttpServiceService,
  ) {}

  ngOnInit() {
    this.getTotalEmployee();
    this.getTotalDepartment();
    this.getTotalRole();
  }

  getTotalEmployee(){
    this.httpService
      .get(environment.employeeUrl + '/list')
      .subscribe((data: Employee[]) => {
        this.totalEmployee = data.length;
      });
  }

  getTotalDepartment(){
    this.httpService
      .get(environment.departmentUrl + '/list')
      .subscribe((data: Department[]) => {
        this.totalDepartment = data.length;
      });
  }

  getTotalRole(){
    this.httpService
      .get(environment.roleUrl + '/list')
      .subscribe((data: Role[]) => {
        this.totalRole = data.length;
      });
  }

}
