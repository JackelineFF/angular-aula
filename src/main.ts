import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { MeComponent } from './me/me.component';
import { AppComponent } from './timer/timer.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, MeComponent, AppComponent],
  template: `
    <h1>Hello from {{name}}!</h1>
   <app-me></app-me>
   <my-app></my-app>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
