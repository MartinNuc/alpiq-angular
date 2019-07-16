import { ArticlesService } from './services/articles.service';
import { Component } from '@angular/core';
import { Article } from './models/article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter = 0;
  dropDownOpened = false;

  styles = {
    red: false,
    large: false
  };

  constructor(public articlesService: ArticlesService) {}

  increment() {
    this.counter++;
  }

  toggleDropdown() {
    this.dropDownOpened = !this.dropDownOpened;
  }

  createNewArticle(articleFromForm: Article) {
    this.articlesService.create(articleFromForm);
  }

  deleteArticle(article: Article) {
    this.articlesService.remove(article);
  }

  toggleColor() {
    this.styles.red = !this.styles.red;
  }

  toggleLarge() {
    this.styles.large = !this.styles.large;
  }
}
