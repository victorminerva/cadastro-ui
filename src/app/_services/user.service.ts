import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {

  private url: string;
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) {
    this.url = 'http://localhost:8080/cadastro-api/usuario';
  }

  registerUser(user: User): Observable<any> {
    return this.http.post(this.url, user, this.options);
  }
}
