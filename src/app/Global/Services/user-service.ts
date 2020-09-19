import { Injectable } from '@angular/core';
import { User } from '../Model/User';

@Injectable({
    providedIn: 'root',
  })
export class UserService { 

    private user: User = null;
    
    setUserAfterSuccessfulLogin(user: User) {
        this.user = user;
        console.log(this.user);
    }

    isUserSet(): boolean {
        return this.user !== null;
    }
}
