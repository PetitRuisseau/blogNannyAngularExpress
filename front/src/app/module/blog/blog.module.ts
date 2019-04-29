import { NgModule } from '@angular/core';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogArticleComponent } from './blog-article/blog-article.component';

const compponent = [
    BlogListComponent,
    BlogArticleComponent,
]

@NgModule({
    declarations: compponent,
    exports: compponent,
    imports: []
})
export class BlogModule {
    static forRoot() {
      return {
        ngModule: BlogModule,
        providers: [],
      }
    }
  }
