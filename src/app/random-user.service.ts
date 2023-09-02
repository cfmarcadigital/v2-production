import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {

  private URL_API: string = "https://randomuser.me/api/";

  constructor(private httpClient: HttpClient) { }

  getUser() {
    return this.httpClient.get(`${this.URL_API}`);
  }
}
