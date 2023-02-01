import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/app/environments/environment';
import { HttpServiceService } from 'src/app/service/http-service.service';
import { ErrorHandlerComponent } from '../common/error-handler/error-handler.component';
import { Role } from './model/role';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css'],
  providers: [ErrorHandlerComponent]
})
export class RoleComponent {

  title: string = "Create New Role";
  roleData: any = {};
  editable: boolean = true;
  public roleForm!: FormGroup;

  constructor(
    private errorHandler: ErrorHandlerComponent,
    private httpService: HttpServiceService,
    private router: Router
  ) {
    this.roleForm = new FormGroup({
      roleName: new FormControl('', [
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
    this.roleData = this.router.getCurrentNavigation()?.extras.state as {roleName: string, description: string};
    if(this.roleData){
      this.roleForm.setValue({"roleName": this.roleData.roleName, "description": this.roleData.description});
      this.title = "Edit Role";
      this.editable = false;
    }
    console.log(this.editable);
  }

  onFormSubmit(){
    if(this.roleData){
      this.updateRole();
      return;
    }
    this.saveRole();
  }

  saveRole() {
    console.log(this.roleForm.value);
    this.httpService
      .post(environment.roleUrl, this.roleForm.value)
      .subscribe(
        (data: Role[]) => {
          console.log('Role inserted' + data);
          this.router.navigate(['/role/details']);
        },
        (error) => {
          console.log('Error occured - ' + JSON.stringify(error));
          this.errorHandler.openDialog(error.error);
        }
      );
  }

  updateRole(){
    console.log(this.roleForm.value);
    this.httpService
    .put(environment.roleUrl, this.roleForm.value)
    .subscribe(
      (data: Role[]) => {
        console.log('Role inserted' + data);
        this.router.navigate(['/role/details']);
      },
      (error) => {
        console.log('Error occured - ' + JSON.stringify(error));
        this.errorHandler.openDialog(error.error);
      }
    );
  }

  get roleName() {
    return this.roleForm.get('roleName');
  }

  get description() {
    return this.roleForm.get('description');
  }
}
