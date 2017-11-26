import {Injectable} from '@angular/core';
import {Http, Headers } from '@angular/http';

@Injectable()
export class HttpClient {
  http: Http;
  constructor(http: Http) {
    this.http = http;
  }

  get(url) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(url, { headers: headers });
  }
}
