import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Global/Services/api-service';
import { UserService } from '../Global/Services/user-service';
import { Post } from '../Global/Model/Post';
import { postEndpoint } from '../Global/Endpoints/endpoints';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.css']
})
export class PostsPageComponent implements OnInit {

  private userId: number;
  public allPosts: Post[];
  public ownUserPosts: Post[];
  public otherUserPosts: Post[];
  

  constructor(
    private apiService: ApiService,
    private userService: UserService
    ) {
   }

  ngOnInit(): void {
    this.userId = this.userService.userInfo.id;
    this.getAllPosts();
  }

  getAllPosts() {
    this.apiService.getRequest<Post[]>(postEndpoint).subscribe(
      data => {
        this.allPosts = data;
        this.filterOwnUserPosts();
        this.filterOtherPosts() 
      },
      error => {
        console.error(error);
      }
    )
  }

  filterOwnUserPosts() {
    this.ownUserPosts = this.allPosts.filter(post => {
      return post.userId === this.userId
    });
  }

  filterOtherPosts() {
    this.otherUserPosts = this.allPosts.filter(post => {
      return post.userId !== this.userId
    });
  }

}
