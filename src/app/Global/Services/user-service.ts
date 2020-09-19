import { Injectable } from '@angular/core';
import { User } from '../Model/User';
import { CanActivate, Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
  })
export class UserService implements CanActivate { 

    private user: User = null;

    constructor(private router: Router) {

    }
    
    setUserAfterSuccessfulLogin(user: User) {
        this.user = user;
        console.log(this.user);
    }

    /*
    A guard to ensure the user is logged in before being able to go to "Posts page"
    Ideally, an authentication guard is created seperately but for the sake of file space and time I reused this class for this particular exercise.
    */
    canActivate(): boolean {
        if(!this.user) {
            this.router.navigateByUrl('/login');
            return false;
        }

        return true
    }
}
