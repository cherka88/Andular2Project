import { AbstractControl, FormArray,  Validators,   FormGroup,    FormBuilder} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CustValidtor } from '../shared/cust-validtor';
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  form: FormGroup;
  constructor(private fb:FormBuilder) {
    this.form = this.fb.group({
      'name': ['123',[Validators.required,Validators.minLength(3)]],
      'group1': this.fb.array([
        this.fb.control('haha1',Validators.required),
        this.fb.control('haha2',Validators.required),
        this.fb.control('haha3',Validators.required),
        this.fb.control('haha4',Validators.required),
      ])
    });
  }

  getFieldInvalid(fieldName, prefix="") {
    // return this.form.controls[fieldName].invalid;
    return this.form.get(prefix+fieldName).invalid;
  }
  // custmerValidtor(c: AbstractControl){
  //   if(c.value == 'haha'){
  //     return {
  //       nohaha : true
  //     };
  //   }
  //   else{
  //     return null;
  //   }
  // }

  ngOnInit() {
    this.form.addControl('email', this.fb.control('default@example.com', Validators.required));
    let group1: FormArray = <FormArray>this.form.controls['group1'];
    group1.insert(group1.length,this.fb.control('haha5',CustValidtor));
  }

}
