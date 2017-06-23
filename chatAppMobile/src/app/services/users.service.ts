import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {
  constructor(private http: Http) {}

  getUsers() {
    return this.http.get('https://randomuser.me/api/?results=10')
      .map(this.extractData);
  }

  extractData(res: Response) {
    return res.json();
  }
}
