import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';

import {environment} from '../../environments/environment';

export const COMMON_API = environment.apiUrl + '/about';

@Injectable()
export class AboutService {
  constructor(private http: Http) {
  }

  getAppVersion() {
    const url = COMMON_API + '/version';
    const headers = new Headers({'Content-Type': 'text/plain'});
    const options = new RequestOptions({headers: headers});
    return this.http.get(url, options);
  }
}
