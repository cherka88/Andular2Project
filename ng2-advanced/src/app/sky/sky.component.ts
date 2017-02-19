import {NgModel} from '@angular/forms';
import { Input, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sky',
  templateUrl: './sky.component.html',
  styleUrls: ['./sky.component.css']
})
export class SkyComponent implements OnInit {

  constructor() { }
  @ViewChild('input')
  input:NgModel;

  ngOnInit() {
  }
  @Input()
  name:string = 'sky';
}
