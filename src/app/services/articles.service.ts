import { SessionService } from './session.service';
import { ArticleFormModel } from '../components/article-form/article-form.component';
import { Injectable } from '@angular/core';
import { Article } from '../models/article';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  articles: Article[] = [];
  private changes$ = new ReplaySubject<Article[]>(1);

  constructor(public sessionService: SessionService) {
    this.notifyChanges();
  }

  get articles$() {
    return this.changes$.asObservable();
  }

  public create(data: ArticleFormModel) {
    this.articles.push({
      id: this.findUniqueId(),
      timestamp: new Date(),
      ...data
    });
    this.notifyChanges();
  }

  public remove(article: Article) {
    if (!this.sessionService.isUserLoggedIn()) {
      throw new Error('Forbidden');
    }
    this.articles = this.articles.filter(item => item !== article);
    this.notifyChanges();
  }

  notifyChanges() {
    this.changes$.next(this.articles);
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
