import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Message } from '../../interfaces/interfaces';
import { ProtectedService } from '../../services/protected.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['../../protected.component.css'],
})
export class CreateComponent {
  createMsgForm: FormGroup = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(1)]],
    text: ['',  [Validators.required, Validators.minLength(1), Validators.maxLength(700)],
    ],
  });

  titleTemp: string = '';
  textTemp: string = '';
  updatedAtTemp: Date = new Date();
  usernameTemp: string = localStorage.getItem('username') || '';

  messages: Message[] = [
    {
      title: '',
      text: '',
      updatedAt: '',
      user: { username: '' },
    },
  ];

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private protectedService: ProtectedService
  ) {}

  createMessage(): void {
    const { title, text } = this.createMsgForm.value;
    this.protectedService.createMessage(title, text).subscribe((resp: Message) => {
      this.messages.push(resp);
      this.router.navigateByUrl('/dashboard/all');
      this.createMsgForm.reset();
    });
  }
}
