import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmailErrorMatcher } from '../Global/ErrorMatchers/EmailErrorMatcher';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public emailForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required])
  });

  public emailErrorMatcher = new EmailErrorMatcher();

  constructor() {

   }

  ngOnInit(): void {
  }

  get emailControl(): any{
    return this.emailForm.get('email');
  }

  submitEmail(): void {
    console.log('Testing submit');
  }

}
