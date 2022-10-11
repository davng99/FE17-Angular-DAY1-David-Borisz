import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  title : string = "We are your ultimate Travel experience Provider!";
  heroBtnText : string = "Learn More";
  heroBtnUrl : string = "https://www.holidaycheck.at/urlaub/";

  constructor() { }

  ngOnInit(): void {
  }

}
