import { Route } from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogArticleComponent } from './blog-article/blog-article.component';

export const BlogRoutes: Route[] = [
    { component: BlogListComponent, path: '', pathMatch: 'full' },
    { component: BlogArticleComponent, path: ':articleId', pathMatch: 'full' }
]