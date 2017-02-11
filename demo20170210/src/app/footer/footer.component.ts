import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }
  filter_type: string = 'All';
  ngOnInit() {
  }
  get itemNonComplete(){
    return this.todos.filter(n=>!n.isDone).length;
  }
  btnClear(){
    this.clearCompleted.emit();
  }
  @Input()
    todos: any[];
  @Output()
    clearCompleted = new EventEmitter<any>();

}
