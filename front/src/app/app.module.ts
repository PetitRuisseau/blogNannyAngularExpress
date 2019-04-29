import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { BlogModule } from './module/blog/blog.module';
import { ArticleService } from './shared/services/article.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    BlogModule.forRoot(),
  ],
  providers: [
    ArticleService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
