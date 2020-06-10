import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mySubsription: Subscription;

  constructor() {
    this.mySubsription = interval(1000).subscribe(data => {
      console.log(data);
    })
  }
  ngOnInit() {
  }

  ngOnDestroy() {
    this.mySubsription.unsubscribe();
  }

}
