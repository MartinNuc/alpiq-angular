import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesCountComponent } from './articles-count.component';

describe('ArticlesCountComponent', () => {
  let component: ArticlesCountComponent;
  let fixture: ComponentFixture<ArticlesCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
