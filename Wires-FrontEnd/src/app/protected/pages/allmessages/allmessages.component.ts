import { Component } from '@angular/core';

import { Message } from '../../interfaces/interfaces';

import { ProtectedService } from '../../services/protected.service';

@Component({
  selector: 'app-allmessages',
  templateUrl: './allmessages.component.html',
  styleUrls: ['../../protected.component.css'],
})
export class AllmessagesComponent {
  messages: Message[] = [
    {
      title: '',
      text: '',
      updatedAt: '',
      user: { username: '' },
    },
  ];

  constructor(private protectedService: ProtectedService) {
    this.getAllMessages();
  }

  getAllMessages(): void {
    this.protectedService.getAllMessages().subscribe((message: Message[]) => {
      this.messages = message;
    });
  }
}
