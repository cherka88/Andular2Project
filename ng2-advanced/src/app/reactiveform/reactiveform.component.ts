import {Validators, FormGroup,  FormBuilder} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  form: FormGroup;
  constructor(private fb:FormBuilder) {
    this.form = this.fb.group({
      'name': ['123',Validators.required]
    });
  }

  getFieldInvalid(fieldName) {
    return this.form.controls[fieldName].invalid;
  }

  ngOnInit() {

  }

}
