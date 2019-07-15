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

  createNewArticle() {
    this.articles.push({
      id: this.findUniqueId(),
      text: 'this is text',
      title: 'Title',
      timestamp: new Date()
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
