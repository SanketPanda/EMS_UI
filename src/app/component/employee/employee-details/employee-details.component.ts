import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/app/environments/environment';
import { HttpServiceService } from 'src/app/service/http-service.service';
import { DeleteHandlerComponent } from '../../common/delete-handler/delete-handler.component';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
  providers: [DeleteHandlerComponent]
})
export class EmployeeDetailsComponent {
  employees: Employee[] = [];

  constructor(
    private httpService: HttpServiceService,
    private deleteHandler: DeleteHandlerComponent,
    private router: Router
  ) {}

  ngOnInit() {
    this.refreshEmployeeList();
  }

  refreshEmployeeList() {
    this.httpService
      .get(environment.employeeUrl + '/list')
      .subscribe((data: Employee[]) => {
        this.employees = data;
        console.log(this.employees);
      });
  }

  deleteEmployee(employee: Employee) {
    console.log('deleting employee ');
    console.log(employee);
    const deleteData = {
      url: environment.employeeUrl,
      conetent: employee,
      childContent: []
    };
    this.deleteHandler.openDialog(deleteData).subscribe(() => {
      console.log('refreh data after deleting');
      this.refreshEmployeeList();
    });
  }

  editEmployee(employee: Employee){
    this.router.navigate(['/employee/create'], {state:employee});
  }
}
