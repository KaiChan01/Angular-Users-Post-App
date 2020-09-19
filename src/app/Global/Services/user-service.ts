import { Injectable, OnInit } from '@angular/core';
import { User } from '../Model/User';
import { CanActivate, Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
  })
export class UserService implements CanActivate { 

    private localStorageString = 'angularExerciseUser';
    private user;

    constructor(private router: Router) {
        this.user = localStorage.getItem(this.localStorageString);
    }
    
    setUserAfterSuccessfulLogin(user: User) {
        this.user = user;
        localStorage.setItem(this.localStorageString, this.user);
    }

    signoutUser() {
        localStorage.removeItem(this.localStorageString);
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
