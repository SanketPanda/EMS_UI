import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/app/environments/environment';
import { HttpServiceService } from 'src/app/service/http-service.service';
import { ErrorHandlerComponent } from '../common/error-handler/error-handler.component';
import { Department } from '../department/model/department';
import { Role } from '../role/model/role';
import { Employee } from './model/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [ErrorHandlerComponent],
})
export class EmployeeComponent {
  title: string = 'Create New Employee';
  employeeData: any = {};
  editable: boolean = true;
  public employeeForm!: FormGroup;
  departments!: Department[];
  selectedItem: any = {name:''};

  constructor(
    private errorHandler: ErrorHandlerComponent,
    private httpService: HttpServiceService,
    private router: Router
  ) {
    this.getDepartmentList();
    this.employeeForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(45),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(45),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      employeeId: new FormControl(''),
      address: new FormControl('', [
        Validators.minLength(4),
        Validators.maxLength(45),
      ]),
      department: new FormControl('', [
        Validators.required
      ]),
    });
    this.editable = true;
    this.employeeData = this.router.getCurrentNavigation()?.extras.state as {
      employeeId: number;
      firstName: string;
      lastName: string;
      email: string;
      address: string;
      isActive: boolean;
      department: Department;
      role: Set<Role>;
    };
    if (this.employeeData) {
      this.employeeForm.setValue({
        employeeId: this.employeeData.employeeId,
        firstName: this.employeeData.firstName,
        lastName: this.employeeData.lastName,
        email: this.employeeData.email,
        address: this.employeeData.address,
        department: this.employeeData.department,
      });
      this.title = 'Edit Employee Details';
      this.editable = false;
      this.selectedItem = this.employeeData.department;
      console.log('selected department is '+this.selectedItem);
    }
    console.log(this.editable);
    console.log(this.employeeData);
    console.log(this.employeeForm.errors);
  }

  onDepartmentChange(value: any){
    if(!value.departmentName)
      return;
    console.log(value);
    this.employeeData.department = value;
  }

  onFormSubmit(){
    if(this.employeeData){
      this.updateEmployee();
      return;
    }
    this.saveEmployee();
  }

  saveEmployee() {
    this.employeeForm.value['department'] = this.selectedItem;
    const test = this.employeeForm.value as Employee;
    console.log(JSON.stringify(test.department));
    this.httpService
      .post(environment.signUp, this.employeeForm.value)
      .subscribe(
        (data: Employee[]) => {
          console.log('Employee inserted' + data);
          this.router.navigate(['/employee/details']);
        },
        (error) => {
          console.log('Error occured - ' + JSON.stringify(error));
          this.errorHandler.openDialog(error.error);
        }
      );
  }

  updateEmployee(){
    this.employeeForm.value['department'] = this.selectedItem;
    console.log('update employee == '+this.selectedItem);
    console.log(this.employeeForm.value);
    this.httpService
    .put(environment.employeeUrl, this.employeeForm.value)
    .subscribe(
      (data: Employee[]) => {
        console.log('Employee updated' + data);
        this.router.navigate(['/employee/details']);
      },
      (error) => {
        console.log('Error occured - ' + JSON.stringify(error));
        this.errorHandler.openDialog(error.error);
      }
    );
  }

  getDepartmentList(){
    this.httpService.get(environment.departmentUrl + '/list').subscribe(
      (data: Department[]) =>{
        this.departments = data;
      }
    );
  }

  get firstName() {
    return this.employeeForm.get('firstName');
  }

  get lastName() {
    return this.employeeForm.get('lastName');
  }

  get email() {
    return this.employeeForm.get('email');
  }

  get address() {
    return this.employeeForm.get('address');
  }

  get department() {
    return this.employeeForm.get('department');
  }
}
