import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'tours-app';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:4444/').subscribe((res: any) => this.title = res.msg);
  }
}
