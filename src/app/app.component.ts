import { Component } from '@angular/core';
import { Article } from './article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter = 0;
  dropDownOpened = false;

  articles: Article[] = [];

  styles = {
    red: false,
    large: false
  };

  increment() {
    this.counter++;
  }

  toggleDropdown() {
    this.dropDownOpened = !this.dropDownOpened;
  }

  createNewArticle(articleFromForm: Article) {
    this.articles.push({
      id: this.findUniqueId(),
      timestamp: new Date(),
      ...articleFromForm
    });
  }

  findUniqueId() {
    const lastId = this.articles
      .map(article => article.id)
      .reduce((acc, curr) => {
        return Math.max(acc, curr);
      }, 0);
    return lastId + 1;
  }

  deleteArticle(article: Article) {
    this.articles = this.articles.filter(item => item !== article);
  }

  toggleColor() {
    this.styles.red = !this.styles.red;
  }

  toggleLarge() {
    this.styles.large = !this.styles.large;
  }
}
