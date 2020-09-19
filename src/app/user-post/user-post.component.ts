import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../Global/Model/Post';
import { UserService } from '../Global/Services/user-service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonErrorMatcher } from '../Global/ErrorMatchers/CommonErrorMatcher';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css']
})
export class UserPostComponent implements OnInit {

  @Input() posts: Post[];

  // This should be generated from the database but I will generate it here for this exercise for the new posts
  @Input() totalPostID: number;

  public newPostForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    body: new FormControl('', [Validators.required]),
  });

  private userId: number;

  public postErrorMatcher = new CommonErrorMatcher();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userId = this.userService.userInfo.id;
  }

  get titleControl() {
    return this.newPostForm.get('title');
  }

  get bodyControl() {
    return this.newPostForm.get('body');
  }

  postNewPost() {
    const post: Post = {
      userId: this.userId,
      id: this.totalPostID,
      title: this.newPostForm.controls['title'].value,
      body: this.newPostForm.controls['body'].value
    }
    this.posts.push(post);

    console.log(this.posts);
    // To keep track of new posts locally in this exercise
    this.totalPostID++;

    const form = document.getElementsByName('postForm')[0] as HTMLFormElement;
    form.reset();
  }
}
