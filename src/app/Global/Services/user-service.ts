import { Injectable, OnInit } from '@angular/core';
import { User } from '../Model/User';
import { CanActivate, Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
  })
export class UserService implements CanActivate { 

    private localStorageString = 'angularExerciseUser';
    private user: User;

    constructor(private router: Router) {
        this.user = JSON.parse(localStorage.getItem(this.localStorageString));
    }
    
    // Saving user in local storage for this exercise
    setUserAfterSuccessfulLogin(user: User) {
        this.user = user;
        localStorage.setItem(this.localStorageString, JSON.stringify(this.user));
    }

    // Signing out removes user from localstorage
    signOutUser() {
        localStorage.removeItem(this.localStorageString);
    }

    get userInfo(): User {
        return this.user;
    }

    /*
    A guard to ensure the user is logged in before being able to go to "Posts page".
    User is redirected to login page if not logged in properly
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
