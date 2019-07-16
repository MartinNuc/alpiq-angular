import { Component } from '@angular/core';
import { Article } from './article';
import { ArticleFormModel } from './article-form/article-form.component';

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

  constructor() {
    this.articles.push({
      id: 1,
      title: 'Politics in czech sux',
      text: `Babis is still here!`,
      timestamp: new Date()
    });
    this.articles.push({
      id: 2,
      title: 'Beautiful weather',
      text: `finally it's here!`,
      timestamp: new Date()
    });
  }

  increment() {
    this.counter++;
  }
  toggleDropdown() {
    this.dropDownOpened = !this.dropDownOpened;
  }

  createNewArticle(articleFromForm: ArticleFormModel) {
    this.articles.push({
      id: this.findUniqueId(),
      timestamp: new Date(),
      ...articleFromForm
    });

    const one = [1, 2, 3];
    const two = [5, 6, 7, ...one];
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
    this.articles = this.articles.filter(
      item => item !== article
    );
  }

  toggleColor() {
    this.styles.red = !this.styles.red;
  }

  toggleLarge() {
    this.styles.large = !this.styles.large;
  }
}
