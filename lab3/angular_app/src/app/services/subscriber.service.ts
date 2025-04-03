import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subscriber } from '../models/Subscriber';

@Injectable({
  providedIn: 'root'
})
export class SubscriberService {

  private apiUrl = 'http://localhost:8000/api/subscribers';

  constructor(private http: HttpClient) {}

  getSubscribers(page: number = 1): Observable<any> {
    let params = new HttpParams();
    params = params.set('page', page.toString());
    return this.http.get<Subscriber[]>(`${this.apiUrl}`, {params});
  }
}
