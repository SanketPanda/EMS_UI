import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { HttpServiceService } from 'src/app/service/http-service.service';
import { Deletedata } from './deleteData';
import { ErrorHandlerComponent } from '../error-handler/error-handler.component';
import { Observable } from 'rxjs';
import { Employee } from '../../employee/model/employee';

@Component({
  selector: 'app-delete-handler',
  templateUrl: './delete-handler.component.html',
  styleUrls: ['./delete-handler.component.css'],
})
export class DeleteHandlerComponent {
  constructor(
    public dialog: MatDialog
  ) {}

  deleteData: Deletedata = { url: '', conetent: '', childContent: '' };

  openDialog(deleteData: Deletedata): Observable<any> {
    const dialogRef = this.dialog.open(DeleteDialog, {
      width: '250px',
      data: deleteData,
    });
    console.log('data is '+ JSON.stringify(deleteData));
    return dialogRef.afterClosed();
  }
}

@Component({
  selector: 'app-delete-handler',
  templateUrl: './delete-handler.html',
  styleUrls: ['./delete-handler.component.css'],
  providers: [HttpServiceService, ErrorHandlerComponent],
})
export class DeleteDialog {
  constructor(
    private dialogRef: MatDialogRef<DeleteDialog>,
    @Inject(HttpServiceService) private httpService: HttpServiceService,
    @Inject(ErrorHandlerComponent) public errorHandler: ErrorHandlerComponent,
    @Inject(MAT_DIALOG_DATA) public data: Deletedata

  ) {}

  delete() {
    this.httpService.delete(this.data.url, this.data.conetent).subscribe(
      (data) => {this.dialogRef.close();},
      (error) => {
        console.log('Error occured - ' + JSON.stringify(error));
        this.errorHandler.openDialog(error.statusText);
        this.dialogRef.close();
      }
    );
  }

  close() {
    this.dialogRef.close();
  }
}
