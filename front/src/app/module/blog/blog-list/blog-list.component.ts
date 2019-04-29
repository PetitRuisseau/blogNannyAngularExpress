import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/shared/services/article.service';

@Component({
    selector: 'blog-list',
    templateUrl: './blog-list.component.html',
    styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
    public articleList = []
    constructor (
        private articleService: ArticleService,
    ) {}

    ngOnInit(): void {
        this.articleService.getArticleList()
            .subscribe(response => this.articleList = response);
    }
}