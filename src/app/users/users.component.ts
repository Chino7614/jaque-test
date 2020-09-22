import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.role.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  userResponse: any;
  roleResponse: any;
  showModal = false;
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
  constructor(private userService: UserService) {
    this.userService
      .user()
      .subscribe((response) => (this.userResponse = response.users));
  }

  ngOnInit(): void {}

  openModal() {
    this.showModal = true;
  }

  addData(event) {
    this.userResponse.push(event);
    this.showModal = false;
  }
}
