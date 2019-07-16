import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArticleComponent } from './components/article/article.component';
import { WordsCountPipe } from './pipes/words-count.pipe';
import { ArticleFormComponent } from './components/article-form/article-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ArticlesCountComponent } from './components/articles-count/articles-count.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    WordsCountPipe,
    ArticleFormComponent,
    ArticlesCountComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
