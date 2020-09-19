import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent {

  @Input() posterName: string = null;
  @Input() postTitle: string;
  @Input() postDescription: string;

  constructor() { }

}
