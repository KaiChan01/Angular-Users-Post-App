import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmailErrorMatcher } from '../Global/ErrorMatchers/EmailErrorMatcher';
import { ApiService } from '../Global/Services/api-service';
import { HttpParams } from '@angular/common/http';

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
  public showErrorMessage = false;
  public noUserFoundMessage = 'No user is associated with that email';

  constructor(private apiService: ApiService) {

   }

  ngOnInit(): void {
  }

  get emailControl(): any{
    return this.emailForm.get('email');
  }

  submitEmail(): void {
    this.showErrorMessage = false;

    const httpParams = new HttpParams()
    .set('email', this.emailForm.controls['email'].value);

    this.apiService.getRequest<Object[]>('/users', httpParams).subscribe(
      data => {
        if(data.length) {
          console.log(data);
          //Redirect
        } else {
          //No user returned
          this.showErrorMessage = true;
        }
      }
    );
  }

}
