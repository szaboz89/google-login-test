import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import {environment} from '../../environments/environment';
import {UserDetails} from '../model/user.details.model';

export const AUTH_API = environment.apiUrl + '/auth';

@Injectable()
export class AuthService {

  loggedUser: UserDetails = new UserDetails();

  constructor(private http: Http) {
    this.initLoggedUser();
    this.refreshAuthenticatedUser();
  }

  initLoggedUser() {
    this.loggedUser = new UserDetails();
  }

  refreshAuthenticatedUser() {
    this.getAuthenticatedUser().subscribe(data => {
        this.loggedUser = data.json();
      },
      error => {
        console.log('User is not authenticated, error: ' + error);
        this.initLoggedUser();
      });
  }

  getAuthenticatedUser() {
    const URL: string = AUTH_API + '/user';
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});
    return this.http.get(URL, options);
  }

  logout() {
    const URL: string = AUTH_API + '/logout';
    return this.http.post(URL, '');
  }
}
