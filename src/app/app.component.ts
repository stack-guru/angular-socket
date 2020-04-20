import { Component, OnInit } from '@angular/core';
import { SocketDataService } from './socket-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: Observable<number[]>;

  constructor(private dataService: SocketDataService) {}

  ngOnInit() {
    this.data = this.dataService.getData();
  }
}
