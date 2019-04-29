import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ArticleService {
    private readonly header = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        params: new HttpParams()
    }

    constructor(
        private httpClient: HttpClient
    )  {}

    public sendNewArticle(title: string, content: string): Observable<any> {
        let req = {
            title: title,
            content: content
        }
        return this.httpClient.post('/api/articles', req, this.header)
    }

    public deleteArticle(articleId: string): Observable<any> {
        return this.httpClient.delete(`/api/articles/${articleId}`, this.header)
    }

    public getArticleList() {
        this.httpClient.get('/api/articles', this.header).subscribe(
            res => {
                console.log('get', res)
            }
        )
    }
}