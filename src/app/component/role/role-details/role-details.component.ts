import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/app/environments/environment';
import { HttpServiceService } from 'src/app/service/http-service.service';
import { DeleteHandlerComponent } from '../../common/delete-handler/delete-handler.component';
import { Role } from '../model/role';

@Component({
  selector: 'app-role-details',
  templateUrl: './role-details.component.html',
  styleUrls: ['./role-details.component.css'],
  providers: [DeleteHandlerComponent]
})
export class RoleDetailsComponent {
  roles: Role[] = [];

  constructor(
    private httpService: HttpServiceService,
    private deleteHandler: DeleteHandlerComponent,
    private router: Router
  ) {}

  ngOnInit() {
    this.refreshRoletList();
  }

  refreshRoletList() {
    this.httpService
      .get(environment.roleUrl + '/list')
      .subscribe((data: Role[]) => {
        this.roles = data;
      });
  }

  deleteRole(role: Role) {
    const deleteData = {
      url: environment.roleUrl + '',
      conetent: role,
      childContent: []
    };
    this.deleteHandler.openDialog(deleteData).subscribe(() => {
      console.log('refreh data after deleting');
      this.refreshRoletList();
    });
  }

  editRole(role: Role){
    this.router.navigate(['/role/create'], {state:role});
  }
}
