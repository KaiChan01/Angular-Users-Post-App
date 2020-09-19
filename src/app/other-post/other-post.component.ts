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

  @Input() posts: Post[];

  public userNamesMap = {};
  public otherPostsReady = false;

  constructor(
    private apiService: ApiService) { }

  ngOnInit() {
    this.createUserNameMap();
  }

  createUserNameMap() {
    const searchedIds = [];
    const userRequestArray = [];
    this.posts.forEach(post => {
      if(!searchedIds.find(id => post.userId === id)) {
        const param = new HttpParams().set('id', post.userId.toString());
        userRequestArray.push(this.apiService.getRequest<Object[]>(usersEndpoint, param));
        searchedIds.push(post.userId);
      }
    });

    forkJoin(userRequestArray).subscribe(
      userData => {
        userData.forEach(user => {
          this.userNamesMap[user[0]['id']] = user[0]['username'];
        });
        this.otherPostsReady = true;
      }
    )
  }
}
