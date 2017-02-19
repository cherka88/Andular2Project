import { AbstractControl } from '@angular/forms';
export function CustValidtor (c:AbstractControl){
  if(c.value == 'haha'){
      return {
        nohaha : true
      };
    }
    else{
      return null;
    }
}
