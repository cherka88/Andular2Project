import {NgZone, Component,  OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { initDashboard } from '../shared/app-init'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute, private zone:NgZone) { }

  ngOnInit() {
    this.zone.runOutsideAngular(()=>{
      initDashboard();
    });

  }
  goCards(type){
    this.router.navigateByUrl('/cards/'+type);
  }
}
