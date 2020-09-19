import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../Global/Model/Post';
import { UserService } from '../Global/Services/user-service';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css']
})
export class UserPostComponent implements OnInit {

  @Input() posts: Post[];

  // This should be generated from the database but I will generate it here for this exercise for the new posts
  @Input() totalPostID: number;

  private userId: number;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userId = this.userService.userInfo.id;
  }

  postNewPost() {
    const post: Post = {
      userId: this.userId,
      id: this.totalPostID,
      title: '',
      body: ''
    }
    this.posts.push(post);
    // To keep track of new posts locally in this exercise
  this.totalPostID++;
  }
}
