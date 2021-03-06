import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { PostsPageRoutingModule } from './posts-page-routing.module';
import { PostsPageComponent } from './posts-page.component';
import { UserPostComponent } from '../user-post/user-post.component';
import { OtherPostComponent } from '../other-post/other-post.component';
import { PostCardComponent } from '../post-card/post-card.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PostsPageComponent,
    UserPostComponent,
    OtherPostComponent,
    PostCardComponent
    ],
  imports: [
    CommonModule,
    PostsPageRoutingModule,
    MatTabsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class PostsPageModule { }
