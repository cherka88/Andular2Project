import {OnDestroy, Component,  OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flot',
  templateUrl: './flot.component.html',
  styleUrls: ['./flot.component.css']
})
export class FlotComponent implements OnInit,OnDestroy {

  constructor(private router:Router, private route:ActivatedRoute) { }
  username:string;
  ParentParams$:any;
  ngOnInit() {
    // this.username = this.route.parent.snapshot.params['username'];
    this.ParentParams$ = this.route.parent.params.subscribe(params=>{
      console.log(params['username']);
    })
  }
  ngOnDestroy() {
    this.ParentParams$.unsubscribe();
  }

}
