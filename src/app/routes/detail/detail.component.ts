import { Component, OnInit } from '@angular/core';
import { PATH_HOME, PATH_DETAIL, PATH_DETAIL_FORMATIONS, PATH_DETAIL_SKILLS } from "../../constantes";
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import { ParamMap } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
    title = 'app';
    constructor(private router: Router, private route: ActivatedRoute) { }
    
    idDetail:number;

    navigateToHome() {
      this.router.navigate([PATH_HOME])
    }
    
    navigateToDetail2() {
      this.router.navigate([PATH_DETAIL, 2])
    }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      console.log('isDetail', params.get('idDetail'));
      });
  }


}
