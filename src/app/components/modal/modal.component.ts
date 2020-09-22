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
    this.picture.setValue('http://www.fillmurray.com/201/300');
    this.saveData.emit(this.modalForm.value);
    console.log(this.modalForm.value);
  }

  addToggle() {
    this.toggleOn = !this.toggleOn;
    console.log('fa', this.toggleOn)
    this.status.setValue(this.toggleOn);
    console.log('asdfa', this.modalForm.value);
  }

  get status(): AbstractControl {
    return this.modalForm.get('active');
  }

  get picture(): AbstractControl {
    return this.modalForm.get('picture');
  }
}
