import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ArticleResponseModel } from '../model';

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

    public getArticleList(): Observable<ArticleResponseModel[]> {
        return this.httpClient.get<ArticleResponseModel[]>('/api/articles', this.header)
    }

    public getArticle(articleId: string): Observable<ArticleResponseModel> {
        return this.httpClient.get<ArticleResponseModel>(`/api/articles/${articleId}`, this.header)
    }
}