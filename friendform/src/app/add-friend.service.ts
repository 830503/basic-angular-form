import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Friend } from './friend';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddFriendService {
  url = '';

  constructor(private http: HttpClient) { }

  addFriend(newFriend: Friend): Observable<any> {
    return this.http.post(this.url, newFriend);
  }
}
