import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmailErrorMatcher } from '../Global/ErrorMatchers/EmailErrorMatcher';
import { ApiService } from '../Global/Services/api-service';
import { HttpParams } from '@angular/common/http';
import { UserService } from '../Global/Services/user-service';
import { User } from '../Global/Model/User';
import { Router } from '@angular/router';
import { usersEndpoint, postEndpoint } from '../Global/Endpoints/endpoints';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  public emailForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required])
  });

  public emailErrorMatcher = new EmailErrorMatcher();
  public noUserFoundMessage = 'No user is associated with that email';
  public showErrorMessage = false;

  constructor(
    private apiService: ApiService,
    private userService: UserService,
    private router: Router
    ) {
   }

  get emailControl(): any{
    return this.emailForm.get('email');
  }

  submitEmail(): void {
    this.showErrorMessage = false;

    const httpParams = new HttpParams()
    .set('email', this.emailForm.controls['email'].value);

    this.apiService.getRequest<Object[]>(usersEndpoint, httpParams).subscribe(
      data => {
        if(data && data.length) {
          /* 
          Just a note here, for this functionality I think it would be better to have a different endpoint to get a single user object instead, to avoid hard coding data[0]
          I am assuming the emails are unqiue (I see they are unique from the "get all" request).
          */
          this.userService.setUserAfterSuccessfulLogin(data[0] as User);
          this.router.navigateByUrl(postEndpoint)
        } else {
          //No user returned, show error message
          this.showErrorMessage = true;
        }

        //Add error handling here 
      },
      // Basic error handling
      error => {
        console.error(error);
      }
    );
  }

}
