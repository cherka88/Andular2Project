import { Headers, RequestOptions, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
@Injectable()
export class DataService {

  constructor(private http: Http) { }

  load(){
      let headers = new Headers({
      'Authorization': 'token 4b781c74-793e-4bae-b543-cecf3195a119'
    });
    let options = new RequestOptions({
      headers: headers
    })

    return this.http.get('/me/todo20170210',options)
     .map(x => x.json());
  }

  save(todos){
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'token 4b781c74-793e-4bae-b543-cecf3195a119'
    });
    let options = new RequestOptions({
      headers: headers
    })

    this.http.post('/me/todo20170210', todos, options)
     .subscribe();
  }
}
