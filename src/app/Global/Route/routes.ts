import { Routes } from '@angular/router';
import { LoginPageComponent } from 'src/app/login-page/login-page.component';
import { PostsPageComponent } from 'src/app/posts-page/posts-page.component';
import { UserService } from '../Services/user-service';

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
    },
    {
        path: 'posts',
        component: PostsPageComponent,
        loadChildren: () => import('src/app/posts-page/posts-page.module').then(m => m.PostsPageModule),
        canActivate: [UserService],
        data: {
            title: 'Posts Page' 
        }
    }
];
