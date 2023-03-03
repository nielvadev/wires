import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Message } from '../interfaces/interfaces';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProtectedService {
  constructor(private http: HttpClient) {}

  private _messages: Message[] = [];

  private baseUrl: string = environment.baseUrl;
  private headers = new HttpHeaders().set(
    'Authorization',
    `Bearer ${localStorage.getItem('token')}`
  );

  get message(): Message[] {
    return { ...this._messages };
  }

  getAllMessages(): Observable<Message[]> {
    const url = `${this.baseUrl}/messages`;
    return this.http.get<Message[]>(url, { headers: this.headers }); //Returns an Observable of Array of Object
  }

  getMyMessages(): Observable<Message[]> {
    const url = `${this.baseUrl}/messages/me`;
    return this.http.get<Message[]>(url, { headers: this.headers }); //Returns an Observable of Array of Object
  }

  createMessage(title: string, text: string): Observable<Message> {
    const url = `${this.baseUrl}/messages`;
    return this.http
      .post<Message>(url, { title, text }, { headers: this.headers })
      .pipe(
        tap((message: Message) => {
          this._messages.push(message);
        })
      );
  }
}
