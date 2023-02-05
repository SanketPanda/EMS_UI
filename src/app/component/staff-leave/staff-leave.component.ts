import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/app/environments/environment';
import { HttpServiceService } from 'src/app/service/http-service.service';
import { ErrorHandlerComponent } from '../common/error-handler/error-handler.component';
import { Role } from '../role/model/role';
import { Notice } from './model/notice';

@Component({
  selector: 'app-staff-leave',
  templateUrl: './staff-leave.component.html',
  styleUrls: ['./staff-leave.component.css']
})
export class StaffLeaveComponent {


}
