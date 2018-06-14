import { Component, OnInit } from '@angular/core';
import { PATH_DETAIL} from "../../constantes";
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  idDetail:number=1;
  
  title = 'app';
  constructor(private router: Router) { }

  navigateToDetail() {
    this.router.navigate([PATH_DETAIL, this.idDetail])
  }

 

  ngOnInit() {
  }

}
