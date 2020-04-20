import { Injectable } from '@angular/core';
import { Subject, from } from 'rxjs';
import { Observable } from 'rxjs';
import * as socketio from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketDataService {
  private baseUrl = 'http://localhost:4001';

  getData(): Observable<number[]> {
    const socket = socketio(this.baseUrl);
    const data = new Subject<number[]>();
    const dataObservable = from(data);

    socket.on('reading', (sensor: number[]) => {
      data.next(sensor);
    });

    socket.emit('subscribeToServer', 1000);

    return dataObservable;
  }
}
