import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front';
  constructor(
    public http: HttpClient,
  ) {
    this.http.get('/api').subscribe(
      res => {
        console.log('okokok', res)
      }
    )
    
  }
}