import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputHint = 'What needs to be done?';
  todos:any[] = [];
  todo:string;
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

}
