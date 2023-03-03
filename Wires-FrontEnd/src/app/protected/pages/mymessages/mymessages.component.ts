import { Component } from '@angular/core';
import { Message } from '../../interfaces/interfaces';
import { ProtectedService } from '../../services/protected.service';

@Component({
  selector: 'app-mymessages',
  templateUrl: './mymessages.component.html',
  styleUrls: ['../../protected.component.css'],
})
export class MymessagesComponent {
  myUsername: string = localStorage.getItem('username') || '';

  messages: Message[] = [
    {
      title: '',
      text: '',
      updatedAt: '',
      user: { username: '' },
    },
  ];

  constructor(private protectedService: ProtectedService) {
    this.getMyMessages();
  }

  getMyMessages(): void {
    this.protectedService.getMyMessages().subscribe((message: Message[]) => {
      this.messages = message;
    });
  }
}
