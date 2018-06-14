import { Component, OnInit } from '@angular/core';
import { connaissance } from './connaissances';

@Component({
  selector: 'app-connaissances',
  templateUrl: './connaissances.component.html',
  styleUrls: ['./connaissances.component.css']
})
export class ConnaissancesComponent implements OnInit {

  constructor() { }
  connaissances:Array<connaissance>=[
    new connaissance("java", "connaissance java"),
    new connaissance("angular", "connaissance angular"),
    new connaissance("spring","connaissance spring")
    ]
  ngOnInit() {
  }

}
