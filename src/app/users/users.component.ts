import { Component, OnInit } from '@angular/core';
import { RoleService } from '../services/roles.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  userResponse: any;
  roleResponse: any;
  headers = [
    {
      picture: 'Foto',
      name: 'Nombre',
      fathersLastName: 'Apellido paterno',
      mothersLastName: 'Apellido materno',
      email: 'Correo',
      roleId: 'Rol',
      active: 'Status',
    },
  ];
  constructor(private roleService: RoleService) {
    this.roleService
      .roles()
      .subscribe((response) => (this.roleResponse = response));
    this.roleService.user().subscribe((response) => {
      this.userResponse = response.users;
      console.log('userResponse', this.userResponse);
    });
  }

  ngOnInit(): void {}
}
