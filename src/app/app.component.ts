import { Component } from '@angular/core';
import { PlanetsService } from "./services/planets.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private planets: PlanetsService, private router: Router) { }

  logOut(): void {
    localStorage.removeItem('planets_email');
    this.planets.emailAdd(false);
    this.router.navigate(["start"]);
  }
}

