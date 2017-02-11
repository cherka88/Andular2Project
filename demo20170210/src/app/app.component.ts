import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputHint = 'What needs to be done?';
  todos:string[] = [];
  todo:string;
  showblock = this.todos.length>0?true:false;
  add(item:HTMLInputElement){
    this.todos.push(item.value);
    item.value = '';
    this.showblock = this.todos.length>0?true:false;
  }
}
