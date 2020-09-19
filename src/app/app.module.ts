import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { LoginPageModule } from './login-page/login-page.module';
import { HttpClientModule } from '@angular/common/http';
import { PostsPageComponent } from './posts-page/posts-page.component';
import { PostsPageModule } from './posts-page/posts-page.module';
import { UserService } from './Global/Services/user-service';

@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    PostsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginPageModule,
    PostsPageModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
