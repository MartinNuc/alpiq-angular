import { SessionService } from './services/session.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArticleComponent } from './components/article/article.component';
import { WordsCountPipe } from './pipes/words-count.pipe';
import { ArticleFormComponent } from './components/article-form/article-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ArticlesCountComponent } from './components/articles-count/articles-count.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CounterComponent } from './components/counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    WordsCountPipe,
    ArticleFormComponent,
    ArticlesCountComponent,
    CounterComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
