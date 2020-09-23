import { Component, OnInit } from '@angular/core';
import { OrderPipe } from '../../pipes/order.pipe';
import { SearchPipe } from '../../pipes/search.pipe';
import { StatusPipe } from '../../pipes/status.pipe';
import { UserService } from '../../services/user.role.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  userResponse: any;
  filterArray: any;
  showModal = false;
  searchText: string;
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
  constructor(
    private userService: UserService,
    private searchPipe: SearchPipe,
    private orderPipe: OrderPipe,
    private statusPipe: StatusPipe
  ) {
    this.userService.user().subscribe((response) => {
      this.userResponse = response.users;
      this.filterArray = response.users;
    });
  }

  ngOnInit(): void {}

  openModal() {
    this.showModal = true;
  }

  addData(event) {
    this.userResponse.push(event);
    this.showModal = false;
  }

  search(text: string) {
    this.filterArray = this.searchPipe.transform(this.userResponse, text);
    console.log('filterArra', this.filterArray);
  }

  order(order: string) {
    console.log('order', order, 'showModal', this.showModal);
    this.filterArray = this.orderPipe.transform(this.userResponse, order);
  }

  status(status: string) {
    this.filterArray = this.statusPipe.transform(this.userResponse, status);
  }
}
