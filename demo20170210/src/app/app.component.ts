import {Headers, RequestOptions,  Http} from '@angular/http';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputHint = 'What needs to be done?';
  todos:any[] = [];
  todo:string;
  constructor(private http: Http){

  }
  ngOnInit(){
    let headers = new Headers({
      'Authorization': 'token 4b781c74-793e-4bae-b543-cecf3195a119'
    });
    let options = new RequestOptions({
      headers: headers
    })

    this.http.get('/me/todo20170210',options)
     .subscribe(res=>{
       this.todos = res.json();
     });
  }
  add(item:HTMLInputElement){
    // this.todos.push({
    //   value: item.value,
    //   isDone: false
    // });
    this.todos = [...this.todos,{value:item.value, isDone:false}];
    item.value = '';
  }
  clearCompleted(){
    this.todos = this.todos.filter(n=>!n.isDone);
  }
  remove(item){
    let idx = this.todos.indexOf(item);
    this.todos.splice(idx,1);
    this.todos = [...this.todos];
  }
  toggleAll(status:boolean){
    this.todos = this.todos.map(s=>{
      s.isDone = status;
      return s;
    });
  }
  save(){
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'token 4b781c74-793e-4bae-b543-cecf3195a119'
    });
    let options = new RequestOptions({
      headers: headers
    })

    this.http.post('/me/todo20170210', this.todos, options)
     .subscribe();
  }

}
