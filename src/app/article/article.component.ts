import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input()
  article: Article;

  @Output()
  articleDelete = new EventEmitter<Article>();

  constructor() { }

  ngOnInit() {
  }

  delete() {
    this.articleDelete.emit(this.article);
  }

}
