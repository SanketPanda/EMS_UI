import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

export interface DialogData {
  errorMessage: string;
}

@Component({
  selector: 'app-error-handler',
  templateUrl: './error-handler.component.html',
  styleUrls: ['./error-handler.component.css'],
})
export class ErrorHandlerComponent {
  errorMessage: string = '';

  constructor(public dialog: MatDialog) {}

  openDialog(errorMsg: string): void {
    const dialogRef = this.dialog.open(ErrorHandlerDialog, {
      width: '250px',
      data: { errorMessage: errorMsg },
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.errorMessage = result;
    });
  }

  onNoClick(): void {
    this.dialog.closeAll();
  }
}

@Component({
  selector: 'app-error-handler',
  templateUrl: './error-handler.html',
  styleUrls: ['./error-handler.component.css'],
})
export class ErrorHandlerDialog {
  errorMessage: string = '';

  constructor(
    public dialogRef: MatDialogRef<ErrorHandlerDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
