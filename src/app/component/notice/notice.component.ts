import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/app/environments/environment';
import { HttpServiceService } from 'src/app/service/http-service.service';
import { ErrorHandlerComponent } from '../common/error-handler/error-handler.component';
import { Notice } from './model/notice';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css'],
  providers: [ErrorHandlerComponent]
})
export class NoticeComponent {

  title: string = "Create New Notice";
  noticeData: any = {};
  editable: boolean = true;
  public noticeForm!: FormGroup;

  constructor(
    private errorHandler: ErrorHandlerComponent,
    private httpService: HttpServiceService,
    private router: Router
  ) {
    this.noticeForm = new FormGroup({
      noticeTitle: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(60),
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(200),
      ]),
      noticeId: new FormControl(''),
    });
    this.editable = true;
    this.noticeData = this.router.getCurrentNavigation()?.extras.state as {noticeId: number, noticeTitle: string, description: string};
    if(this.noticeData){
      this.noticeForm.setValue({"noticeId": this.noticeData.noticeId ,"noticeTitle": this.noticeData.noticeTitle, "description": this.noticeData.description});
      this.title = "Edit Notice";
      this.editable = false;
    }
    console.log(this.editable);
  }

  onFormSubmit(){
    if(this.noticeData){
      this.updateNotice();
      return;
    }
    this.saveNotice();
  }

  saveNotice() {
    console.log(this.noticeForm.value);
    this.httpService
      .post(environment.noticeUrl, this.noticeForm.value)
      .subscribe(
        (data: Notice[]) => {
          console.log('Role inserted' + data);
          this.router.navigate(['/notice/details']);
        },
        (error) => {
          console.log('Error occured - ' + JSON.stringify(error));
          this.errorHandler.openDialog(error.error);
        }
      );
  }

  updateNotice(){
    console.log(this.noticeForm.value);
    this.httpService
    .put(environment.noticeUrl, this.noticeForm.value)
    .subscribe(
      (data: Notice[]) => {
        console.log('Notice inserted' + data);
        this.router.navigate(['/notice/details']);
      },
      (error) => {
        console.log('Error occured - ' + JSON.stringify(error));
        this.errorHandler.openDialog(error.error);
      }
    );
  }

  get noticeTitle() {
    return this.noticeForm.get('noticeTitle');
  }

  get description() {
    return this.noticeForm.get('description');
  }

}
