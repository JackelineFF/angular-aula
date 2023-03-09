import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  standalone: true,
  styleUrls: ['./me.component.css'],
})
export class MeComponent implements OnInit {
  myName: string;

  constructor() {
    this.myName = 'Jackeline';
  }

  ngOnInit() {}
}
