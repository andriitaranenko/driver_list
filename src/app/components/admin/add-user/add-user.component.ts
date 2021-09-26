import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../shared/services/auth.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  myForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      'userEmail': ['', [Validators.required, Validators.email]],
      'userName': ['', [Validators.required]],
      'userPassword': ['', Validators.required],
      'userRole': ['', Validators.required]
    })
  }

  submit(): void {
    console.log(this.myForm.value);
    this.authService.signUp(
      this.myForm.value['userEmail'],
      this.myForm.value['userName'],
      this.myForm.value['userPassword'],
      this.myForm.value['userRole']
    )
  }

}
