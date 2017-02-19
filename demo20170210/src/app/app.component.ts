import { DataService } from './data.service';
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
  // isEdit = false;
  constructor(public datasvc: DataService){

  }
  ngOnInit(){
      this.datasvc.load().subscribe(values => {
          this.todos = values; //如果一開始todos存入空資料，後續add會掛
    });
  }

  add(item:HTMLInputElement){
    // this.todos.push({
    //   value: item.value,
    //   isDone: false
    // });
    this.todos = [...this.todos, { value:item.value, isDone:false, isEdit:false }];
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
  edit(item){
    // console.log(item.value);
    item.isEdit = true;
  }
  stopEditing(item, editItem:string){
    item.value = editItem;
    item.isEdit = false;
  }
  updateEditing(item, editItem:string){
    let _editItem:string = editItem;
    item.isEdit = false;
    if(_editItem.length === 0){
      delete this.todos[item];
    }
    item.value = _editItem;
  }
  cancelEditing(item){
    item.isEdit = false;
  }

}
