import { Component, OnInit } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  posts$: Observable<ScullyRoute[]> | undefined;
  // The posts$ observable will hold the filtered routes

  constructor(private scullyService: ScullyRoutesService) {
    this.posts$ = this.scullyService.available$.pipe(
      map(posts => posts.filter(post => post.title))
    );
    // Filter the available routes to only include those with a title
  }

  ngOnInit(): void {
    // No additional initialization needed
  }

}
