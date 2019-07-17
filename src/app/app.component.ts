import { CounterComponent } from './components/counter/counter.component';
import { ArticlesService } from './services/articles.service';
import { Component, ViewChildren, QueryList, OnInit } from '@angular/core';
import { Article } from './models/article';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  counter = 0;
  dropDownOpened = false;

  subj$ = new Subject();

  articles$ = this.articlesService.articles$;

  @ViewChildren(CounterComponent)
  counterComponent: QueryList<CounterComponent>;

  styles = {
    red: false,
    large: false
  };

  error: string;

  constructor(
    public articlesService: ArticlesService,
    public snackbar: MatSnackBar
  ) {
  }

  ngOnInit() {
    this.subj$.subscribe({
      next(value) {
        console.log('clicked!', value);
      }
    });
  }

  async getValue() {
    const x = await this.subj$.toPromise();
    console.log(x);
  }

  emitValue() {
    this.subj$.next(Math.random());
    this.getValue();
  }

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
    try {
      this.articlesService.remove(article);
    } catch (err) {
      this.error = err.message;
      this.snackbar.open(err.message, 'close', {
        duration: 2000
      });
    }
  }

  toggleColor() {
    this.styles.red = !this.styles.red;
  }

  toggleLarge() {
    this.styles.large = !this.styles.large;
  }
}
