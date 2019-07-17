import { TestBed } from '@angular/core/testing';

import { ArticlesService } from './articles.service';
import { SessionService } from './session.service';

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
  });
  describe('logged in user', () => {
    beforeEach(() => {
      spyOn(sessionService, 'isUserLoggedIn').and.returnValue(true);
    });

    it('should remove article when user is logged in', () => {
      service.create(dummyArticle);
      const firstArticle = service.articles[0];
      service.remove(firstArticle);
      expect(sessionService.isUserLoggedIn).toHaveBeenCalled();
      expect(service.articles.length).toBe(0);
    });
  });

  describe('logged out user', () => {
    beforeEach(() => {
      spyOn(sessionService, 'isUserLoggedIn').and.returnValue(false);
    });

    it('should remove article when user is NOT logged in', () => {
      service.create(dummyArticle);
      const firstArticle = service.articles[0];
      expect(() => service.remove(firstArticle)).toThrowError();
      expect(service.articles.length).toBe(1);
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add an article', () => {
    expect(service.articles.length).toBe(0);
    service.create(dummyArticle);
    expect(service.articles.length).toBe(1);
    expect(service.articles[0].text).toEqual(dummyArticle.text);
  });

  it('should generate unique id when inserting multiple elements', () => {
    service.create(dummyArticle);
    service.create(dummyArticle);
    service.create(dummyArticle);
    service.create(dummyArticle);
    const ids = service.articles.map(item => item.id);
    ids.sort();
    const setOfIds = new Set(ids);
    expect(setOfIds.size).toBe(ids.length);
  });
});
