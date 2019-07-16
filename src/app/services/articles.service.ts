import { SessionService } from './session.service';
import { ArticleFormModel } from '../components/article-form/article-form.component';
import { Injectable } from '@angular/core';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  articles: Article[] = [];

  constructor(private sessionService: SessionService) { }

  public create(data: ArticleFormModel) {
    this.articles.push({
      id: this.findUniqueId(),
      timestamp: new Date(),
      ...data
    });
  }

  public remove(article: Article) {
    if (!this.sessionService.isUserLoggedIn()) {
      throw new Error('Forbidden');
    }
    this.articles = this.articles.filter(item => item !== article);
  }

  private findUniqueId() {
    const lastId = this.articles
      .map(article => article.id)
      .reduce((acc, curr) => {
        return Math.max(acc, curr);
      }, 0);
    return lastId + 1;
  }
}
