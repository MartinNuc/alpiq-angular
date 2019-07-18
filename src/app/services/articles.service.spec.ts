import { TestBed } from '@angular/core/testing';

import { ArticlesService } from './articles.service';
import { SessionService } from './session.service';
import { map, first } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Article } from '../models/article';

fdescribe('ArticlesService', () => {
  const dummyArticle = {
    author: {
      name: 'Martin',
      email: 'martin@nuc.cz'
    },
    text: 'text',
    title: 'title'
  };

  let service: ArticlesService;
  let sessionService: SessionService;
  let articles$: Observable<Article[]>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: SessionService,
          useValue: {
            isUserLoggedIn() {
              return true;
            }
          }
        }
      ]
    });
    service = TestBed.get(ArticlesService);
    sessionService = TestBed.get(SessionService);
    articles$ = service.articles$.pipe(first());
  });
  describe('logged in user', () => {
    beforeEach(() => {
      spyOn(sessionService, 'isUserLoggedIn').and.returnValue(true);
    });

    it('should remove article when user is logged in', async () => {
      service.create(dummyArticle);
      let articles = await articles$.toPromise();
      const firstArticle = articles[0];
      service.remove(firstArticle);
      expect(sessionService.isUserLoggedIn).toHaveBeenCalled();
      articles = await articles$.toPromise();
      expect(articles.length).toBe(0);
    });
  });

  describe('logged out user', () => {
    beforeEach(() => {
      spyOn(sessionService, 'isUserLoggedIn').and.returnValue(false);
    });

    it('should remove article when user is NOT logged in', async() => {
      service.create(dummyArticle);
      let articles = await articles$.toPromise();
      const firstArticle = articles[0];
      expect(() => service.remove(firstArticle)).toThrowError();
      articles = await articles$.toPromise();
      expect(articles.length).toBe(1);
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add an article', async() => {
    const articles = await articles$.toPromise();
    expect(articles.length).toBe(0);
    service.create(dummyArticle);
    expect(articles.length).toBe(1);
    expect(articles[0].text).toEqual(dummyArticle.text);
  });

  it('should generate unique id when inserting multiple elements', async () => {
    service.create(dummyArticle);
    service.create(dummyArticle);
    service.create(dummyArticle);
    service.create(dummyArticle);
    const ids = await articles$
      .pipe(map(array => array.map(item => item.id)))
      .toPromise();
    ids.sort();
    const setOfIds = new Set(ids);
    expect(setOfIds.size).toBe(ids.length);
  });
});
