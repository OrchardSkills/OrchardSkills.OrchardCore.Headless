import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogContentComponent } from './blog-content.component';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { GraphQLModule } from 'src/app/graphql.module';

describe('BlogContentComponent', () => {
  let component: BlogContentComponent;
  let fixture: ComponentFixture<BlogContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BlogContentComponent],
      imports: [HttpClientModule,
        MarkdownModule.forRoot({ loader: HttpClient }),
        RouterTestingModule,
        GraphQLModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
