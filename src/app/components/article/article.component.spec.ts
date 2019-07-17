import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleComponent } from './article.component';
import { WordsCountPipe } from 'src/app/pipes/words-count.pipe';
import { By } from '@angular/platform-browser';

fdescribe('ArticleComponent', () => {
  let component: ArticleComponent;
  let fixture: ComponentFixture<ArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleComponent, WordsCountPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleComponent);
    component = fixture.componentInstance;
    component.article = {
      id: 1,
      text: 'random text',
      title: 'Title big big',
      timestamp: new Date(2019, 1, 1, 9, 41, 0),
      author: {
        email: 'email',
        name: 'name'
      }
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title and id in h1', () => {
    const title = fixture.debugElement.query(By.css('h1'));
    expect(title.nativeElement.textContent).toBe('Title big big 1');
  });

  it('should display correct time', () => {
    const timestamp = fixture.debugElement.query(By.css('[data-test-article="timestamp"]'));
    expect(timestamp.nativeElement.textContent).toBe('09:41:00');
  });
});
