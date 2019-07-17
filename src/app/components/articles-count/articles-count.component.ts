import { ArticlesService } from '../../services/articles.service';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-articles-count',
  templateUrl: './articles-count.component.html',
  styleUrls: ['./articles-count.component.css'],
})
export class ArticlesCountComponent implements OnInit {
  articlesCount$ = this.articlesService.articles$.pipe(
    map(article => article.length)
  );

  constructor(public articlesService: ArticlesService) {
  }

  ngOnInit() {}
}
