import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  type:string;
  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    // this.type=this.route.snapshot.params['type'];
    this.route.params.subscribe(params=>{
      this.type = params['type'];
      console.log(params['name']);
    });

    this.route.queryParams.subscribe(params=>{
      console.log(params['name']);
    })
  }
  goCards(type){
    this.router.navigateByUrl('/cards/'+type);
  }

  // 13 練習兩種不同的可選參數用法 (Optional Parameters)
  goQueryString() {
    this.router.navigate(['/cards', 100], {
      queryParams: {
        name: 'QueryString1'
      }
    })
  }

  goMatrix() {
    this.router.navigate(['/cards', 100, {
        name: 'Matrix',
      }]);
  }


}
