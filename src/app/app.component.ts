import { Component, OnInit, OnDestroy } from '@angular/core';
import { SocketDataService } from './socket-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  data: number[];
  sub: Subscription;

  constructor(private dataService: SocketDataService) {}

  ngOnInit() {
    this.sub = this.dataService.getData().subscribe(
      data => {
        this.data = data;
      },
      err => console.error(err)
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
