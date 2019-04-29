import { ArticleModel } from './article-model';

export class ArticleResponseModel {
    public edithDate: Date;
    public postDate: Date;
    public id: string;
    public data: ArticleModel[]
}