import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent, RoutesRecognized, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit  {

  public pageTitle = '';
  public currentURL = '';

  constructor(private router: Router) {
   }

  ngOnInit(): void {
    this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
          this.pageTitle = data.state.root.firstChild.data.title;
      }

      if(data instanceof NavigationEnd) {
        this.currentURL = this.router.url;
      }
    });

    
  }
}
