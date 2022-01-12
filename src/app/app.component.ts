import { Component } from '@angular/core';
import { PlanetsService } from "./services/planets.service";
import { Router } from '@angular/router';
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public isLogIn: Observable<boolean>;

  constructor(private planets: PlanetsService, private router: Router) {
    this.isLogIn = this.planets.isEmailAdded$;
  }

  public logOut(): void {
    this.planets.changeEmail(false);
    this.router.navigate(["start"]);
  }
}

