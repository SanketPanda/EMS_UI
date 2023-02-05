import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/app/environments/environment';
import { HttpServiceService } from 'src/app/service/http-service.service';
import { DeleteHandlerComponent } from '../../common/delete-handler/delete-handler.component';
import { Notice } from '../model/notice';

@Component({
  selector: 'app-notice-details',
  templateUrl: './notice-details.component.html',
  styleUrls: ['./notice-details.component.css'],
  providers: [DeleteHandlerComponent]
})
export class NoticeDetailsComponent {

  noticeList: Notice[] = [];

  constructor(
    private httpService: HttpServiceService,
    private deleteHandler: DeleteHandlerComponent,
    private router: Router
  ) {}

  ngOnInit() {
    this.refreshNoticetList();
  }

  refreshNoticetList() {
    this.httpService
      .get(environment.noticeUrl + '/list')
      .subscribe((data: Notice[]) => {
        this.noticeList = data;
      });
  }

  deleteNotice(notice: Notice) {
    const deleteData = {
      url: environment.noticeUrl,
      conetent: notice,
      childContent: []
    };
    this.deleteHandler.openDialog(deleteData).subscribe(() => {
      console.log('refreh data after deleting');
      this.refreshNoticetList();
    });
  }

  editNotice(notice: Notice){
    this.router.navigate(['/notice/create'], {state:notice});
  }

}
