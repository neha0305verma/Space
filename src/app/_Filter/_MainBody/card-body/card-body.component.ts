import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-body',
  templateUrl: './card-body.component.html',
  styleUrls: ['./card-body.component.css']
})
export class CardBodyComponent implements OnInit {
  cards = ["card1","card3","card3","card4","card5","card6"];
  constructor() { }

  ngOnInit() {
  }

}
