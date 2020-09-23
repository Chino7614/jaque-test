import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RoleService } from 'src/app/services/roles.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Output() showModal = new EventEmitter<boolean>();
  @Output() saveData = new EventEmitter<boolean>();
  modalForm: FormGroup;
  roleResponse: any;
  toggleOn = false;
  urlImg = '/assets/icons/user.svg';
  selectImg = false;
  constructor(private formBuilder: FormBuilder, private roleService: RoleService) {
    this.modalForm = this.formBuilder.group({
      picture: [''],
      name: [''],
      fathersLastName: [''],
      mothersLastName: [''],
      email: [''],
      roleId: [''],
      active: [''],
    });
    this.roleService.roles().subscribe(response => this.roleResponse = response.roles);
  }

  ngOnInit(): void {}

  save() {
    this.picture.setValue(this.urlImg);
    this.saveData.emit(this.modalForm.value);
  }

  addToggle() {
    this.toggleOn = !this.toggleOn;
    this.status.setValue(this.toggleOn);
  }

  selectImage() {
    this.urlImg = 'http://www.fillmurray.com/202/300';
    this.selectImg = true;
  }

  get status(): AbstractControl {
    return this.modalForm.get('active');
  }

  get picture(): AbstractControl {
    return this.modalForm.get('picture');
  }
}
