import {Component, OnInit} from '@angular/core';
import {WebSocketService} from "../shared/web-socket/web-socket.service";

@Component({
  selector: 'app-websocket',
  templateUrl: './websocket.component.html',
  styleUrls: ['./websocket.component.css']
})
export class WebsocketComponent implements OnInit {

  constructor(private wsService: WebSocketService) {
  }

  ngOnInit() {
    this.wsService.createObservableSocket('ws://localhost:8085')
      .subscribe(
        data => console.log(data),
        err => console.log(err),
        () => console.log('流已经结束')
      );
  }
  sendMessageToServer(){
    this.wsService.sendMessage('hello from client');
  }

}
