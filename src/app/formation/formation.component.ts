import { Component, OnInit } from '@angular/core';
import { formation } from './formation';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  
  formations:Array<formation>/*=[
    new formation("java", "formation java"),
    new formation("angular", "formation angular"),
    new formation("spring","formation spring")
    ]*/
  ngOnInit() {
    this.route.data.subscribe(data => this.formations= data['formations']);
  }

}