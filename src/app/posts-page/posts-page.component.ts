import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Global/Services/api-service';
import { UserService } from '../Global/Services/user-service';
import { Post } from '../Global/Model/Post';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.css']
})
export class PostsPageComponent implements OnInit {

  private userId: number;
  private allPosts: Post[];
  public ownUserPosts: Post[];
  

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
    this.apiService.getRequest<Post[]>('/posts').subscribe(
      data => {
        this.allPosts = data;
        this.filterOwnUserPosts();
        this.filterOtherPosts() 
      },
      // Basic error handling
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
    this.ownUserPosts = this.allPosts.filter(post => {
      return post.userId !== this.userId
    });
  }

}
