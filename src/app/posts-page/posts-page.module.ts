import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';

import { PostsPageRoutingModule } from './posts-page-routing.module';
import { PostsPageComponent } from './posts-page.component';


@NgModule({
  declarations: [PostsPageComponent],
  imports: [
    CommonModule,
    PostsPageRoutingModule,
    MatTabsModule
  ]
})
export class PostsPageModule { }
