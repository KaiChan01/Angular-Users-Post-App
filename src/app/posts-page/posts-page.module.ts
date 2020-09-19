import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';

import { PostsPageRoutingModule } from './posts-page-routing.module';
import { PostsPageComponent } from './posts-page.component';
import { UserPostComponent } from '../user-post/user-post.component';
import { OtherPostComponent } from '../other-post/other-post.component';


@NgModule({
  declarations: [
    PostsPageComponent,
    UserPostComponent,
    OtherPostComponent,],
  imports: [
    CommonModule,
    PostsPageRoutingModule,
    MatTabsModule
  ]
})
export class PostsPageModule { }
