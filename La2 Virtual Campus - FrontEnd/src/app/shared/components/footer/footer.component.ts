import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fte-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  foot = window.outerHeight - 55;

  constructor() {
  }

  ngOnInit(): void {
  }

}
