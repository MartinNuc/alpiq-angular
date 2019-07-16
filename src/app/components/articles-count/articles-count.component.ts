import { ArticlesService } from '../../services/articles.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles-count',
  templateUrl: './articles-count.component.html',
  styleUrls: ['./articles-count.component.css']
})
export class ArticlesCountComponent implements OnInit {

  constructor(public articlesService: ArticlesService) {
  }

  ngOnInit() {
  }

}
