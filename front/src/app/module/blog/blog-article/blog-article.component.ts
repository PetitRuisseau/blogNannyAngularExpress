import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/shared/services/article.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ArticleResponseModel } from 'src/app/shared';

@Component({
    selector: 'blog-article',
    templateUrl: './blog-article.component.html',
    styleUrls: ['./blog-article.component.scss']
})
export class BlogArticleComponent implements OnInit {
    public article: ArticleResponseModel;
    constructor (
        private articleService: ArticleService,
        private route: ActivatedRoute,
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            if (params['articleId']) {
                this.articleService.getArticle(params['articleId'])
                    .subscribe(response => this.article = response);
            }
        })
    }
}