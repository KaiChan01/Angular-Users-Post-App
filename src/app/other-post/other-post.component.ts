import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../Global/Model/Post';
import { UserService } from '../Global/Services/user-service';

@Component({
  selector: 'app-other-post',
  templateUrl: './other-post.component.html',
  styleUrls: ['./other-post.component.css']
})
export class OtherPostComponent{

  @Input() posts: Post[];

  constructor(private userService: UserService) { }
}
