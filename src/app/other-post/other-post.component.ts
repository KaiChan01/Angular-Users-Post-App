import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../Global/Model/Post';
import { ApiService } from '../Global/Services/api-service';
import { HttpParams } from '@angular/common/http';
import { usersEndpoint } from '../Global/Endpoints/endpoints';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-other-post',
  templateUrl: './other-post.component.html',
  styleUrls: ['./other-post.component.css']
})
export class OtherPostComponent implements OnInit{

  // Input of all other user's posts
  @Input() posts: Post[];

  public userNamesMap = {};
  public otherPostsReady = false;

  constructor(
    private apiService: ApiService) { }

  ngOnInit() {
    this.createUserNameMap();
  }

  // populating a map of user id -> user name
  createUserNameMap() {
    // This searched ID array is used to prevent making multiple requests for the same user ID
    const searchedIds = [];
    const userRequestArray = [];
    this.posts.forEach(post => {
      //Using the user's id as a parameter to the user endpoint, I can retrieve the user informate and extract the username
      if(!searchedIds.find(id => post.userId === id)) {
        const param = new HttpParams().set('id', post.userId.toString());
        userRequestArray.push(this.apiService.getRequest<Object[]>(usersEndpoint, param));
        searchedIds.push(post.userId);
      }
    });

    //Using forkjoin for all requests to return before creating the object map 
    forkJoin(userRequestArray).subscribe(
      userData => {
        userData.forEach(user => {
          this.userNamesMap[user[0]['id']] = user[0]['username'];
        });
        // Once ready, we can display other user's posts and their names
        this.otherPostsReady = true;
      },
      error => {
        console.error(error);
      }
    )
  }
}
