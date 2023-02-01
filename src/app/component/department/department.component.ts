import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/app/environments/environment';
import { HttpServiceService } from 'src/app/service/http-service.service';
import { ErrorHandlerComponent } from '../common/error-handler/error-handler.component';
import { Department } from './model/department';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
  providers: [ErrorHandlerComponent],
})
export class DepartmentComponent implements OnInit {

  title: string = "Create New Department";
  departmentData: any = {};
  editable: boolean = true;
  public departmentForm!: FormGroup;

  public ngOnInit(): void {

  }

  constructor(
    private errorHandler: ErrorHandlerComponent,
    private httpService: HttpServiceService,
    private router: Router
  ) {
    this.departmentForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(45),
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(100),
      ]),
    });
    this.editable = true;
    this.departmentData = this.router.getCurrentNavigation()?.extras.state as {name: string, description: string};
    if(this.departmentData){
      this.departmentForm.setValue({"name": this.departmentData.name, "description": this.departmentData.description});
      this.title = "Edit Department";
      this.editable = false;
    }
    console.log(this.editable);
  }

  onFormSubmit(){
    if(this.departmentData){
      this.updateDepartent();
      return;
    }
    this.saveDepartment();
  }

  saveDepartment() {
    console.log(this.departmentForm.value);
    this.httpService
      .post(environment.departmentUrl, this.departmentForm.value)
      .subscribe(
        (data: Department[]) => {
          console.log('Department inserted' + data);
          this.router.navigate(['/department/details']);
        },
        (error) => {
          console.log('Error occured - ' + JSON.stringify(error));
          this.errorHandler.openDialog(error.error);
        }
      );
  }

  updateDepartent(){
    console.log(this.departmentForm.value);
    this.httpService
    .put(environment.departmentUrl, this.departmentForm.value)
    .subscribe(
      (data: Department[]) => {
        console.log('Department inserted' + data);
        this.router.navigate(['/department/details']);
      },
      (error) => {
        console.log('Error occured - ' + JSON.stringify(error));
        this.errorHandler.openDialog(error.error);
      }
    );
  }

  get name() {
    return this.departmentForm.get('name');
  }

  get description() {
    return this.departmentForm.get('description');
  }
}
