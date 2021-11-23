import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  authCredentialDto: FormGroup;
  fieldTextType: boolean;
  submitted: boolean;
  constructor(private authServices: AuthService, private router: Router, private fb: FormBuilder) {}
  ngOnInit(): void {
    this.createFormBuilder();
  }
  loginUser() {
    this.authServices.login(this.authCredentialDto.value).subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        // this.alertService.error(error);
        console.log(error);
      }
    );
  }
  createFormBuilder() {
    this.authCredentialDto = this.fb.group({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }
  get f() {
    return this.authCredentialDto.controls;
  }
}
