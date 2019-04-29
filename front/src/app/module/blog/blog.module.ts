import { NgModule } from '@angular/core';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogArticleComponent } from './blog-article/blog-article.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

const compponent = [
    BlogListComponent,
    BlogArticleComponent,
]

@NgModule({
    declarations: compponent,
    exports: compponent,
    imports: [
        BrowserModule,
        RouterModule
    ]
})
export class BlogModule {
    static forRoot() {
      return {
        ngModule: BlogModule,
        providers: [],
      }
    }
  }
