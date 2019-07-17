import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  count = 0;

  constructor() { }

  ngOnInit() {
  }

  public increment() {
    this.count++;
  }

  public decrement() {
    this.count--;
  }
}
