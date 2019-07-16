import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export interface ArticleFormModel {
  title: string;
  text: string;
  author: {
    email: string;
    name: string;
  };
}

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent implements OnInit {
  articleForm: FormGroup;

  @Output()
  created = new EventEmitter<ArticleFormModel>();

  constructor(fb: FormBuilder) {
    this.articleForm = fb.group({
      title: ['', Validators.required],
      text: ['', [Validators.required, Validators.minLength(5)]],
      author: fb.group({
        email: ['', [Validators.required, Validators.email]],
        name: ['', Validators.required],
      })
    });
  }

  ngOnInit() {}

  save() {
    if (this.articleForm.valid) {
      console.log(this.articleForm.value);
      this.created.emit(this.articleForm.value);
    }
  }
}
