import { WordsCountPipe } from 'src/app/pipes/words-count.pipe';
import { ArticleComponent } from './components/article/article.component';
import { ArticleFormComponent } from './components/article-form/article-form.component';
import { CounterComponent } from './components/counter/counter.component';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { By } from '@angular/platform-browser';

fdescribe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let counterElement: HTMLPreElement;
  let incrementButtonElement: HTMLButtonElement;
  let decrementButtonElement: HTMLButtonElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CounterComponent,
        ArticleFormComponent,
        ArticleComponent,
        WordsCountPipe
      ],
      providers: [
        {
          provide: MatSnackBar,
          useValue: {
            open: jasmine.createSpy()
          }
        }
      ],
      imports: [ReactiveFormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    counterElement = fixture.nativeElement.querySelector(
      '[data-test-app="counter"]'
    );
    incrementButtonElement = fixture.nativeElement.querySelector(
      '[data-test-app="incrementButton"]'
    );
    decrementButtonElement = fixture.nativeElement.querySelector(
      '[data-test-app="decrementButton"]'
    );
  });

  it('should increment counter', () => {
    expect(counterElement.textContent).toBe('0');
    incrementButtonElement.click();
    fixture.detectChanges();
    expect(counterElement.textContent).toBe('1');
  });

  it('should decrement counter', () => {
    expect(counterElement.textContent).toBe('0');
    decrementButtonElement.click();
    fixture.detectChanges();
    expect(counterElement.textContent).toBe('-1');
  });

  it('should display newly created article', () => {
    fixture.debugElement.query(By.css('[data-test-article-form="title"]'));
    const title = fixture.nativeElement.querySelector(
      '[data-test-article-form="title"]'
    );
    const text = fixture.nativeElement.querySelector(
      '[data-test-article-form="text"]'
    );
    const authorName = fixture.nativeElement.querySelector(
      '[data-test-article-form="author.name"]'
    );
    const authorEmail = fixture.nativeElement.querySelector(
      '[data-test-article-form="author.email"]'
    );
    const createArticleButton = fixture.nativeElement.querySelector(
      '[data-test-article-form="createArticle"]'
    );
    expect(getArticlesCount()).toBe(0);

    title.value = 'Popelka';
    title.dispatchEvent(new Event('input'));
    text.value = 'Bylo nebylo';
    text.dispatchEvent(new Event('input'));
    authorName.value = 'Martin Nuc';
    authorName.dispatchEvent(new Event('input'));
    authorEmail.value = 'martin@nuc.cz';
    authorEmail.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    createArticleButton.click();

    fixture.detectChanges();
    expect(getArticlesCount()).toBe(1);

    function getArticlesCount() {
      const articles = fixture.nativeElement.querySelectorAll(
        '[data-test-app="articleItem"]'
      );
      return articles.length;
    }
  });
});
