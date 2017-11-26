import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpClient } from './utils/http.service';
import { Constants } from './utils/app.constants';

@Injectable()
export class ProviderService {
  base_url: String = Constants.BASE_URL;

  constructor(public httpClient: HttpClient) {

  }

  getData(): Observable<any> {
    return this.httpClient.get(this.base_url);
  }
}
