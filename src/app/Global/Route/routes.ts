import { Routes } from '@angular/router';
import { LoginPageComponent } from 'src/app/login-page/login-page.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginPageComponent,
        loadChildren: () => import('src/app/login-page/login-page.module').then(m => m.LoginPageModule),
        data: {
            title: 'Login Page' 
        }
    }
];
