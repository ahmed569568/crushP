import { ChatMessageDto } from './../models/chatMessageDto';
import { WebSocketService } from './../web-socket.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit, OnDestroy {
  constructor(public webSocketService: WebSocketService) {}

  ngOnInit(): void {
    this.webSocketService.openWebSocket();
  }
  sendMessage(sendForm: NgForm) {
    const chatMessageDto = new ChatMessageDto(sendForm.value.user, sendForm.value.message);
    this.webSocketService.sendMessage(chatMessageDto);
    console.log(sendForm.value);
    sendForm.controls.message.reset();
    sendForm.controls.user.reset();
  }
  ngOnDestroy() {
    this.webSocketService.closeWebSocket();
  }
}
