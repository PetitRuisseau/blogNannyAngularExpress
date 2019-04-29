import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogRoutes } from './module/blog/blog.routes';

const routes: Routes = [
  { path: 'blog', children: BlogRoutes },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
