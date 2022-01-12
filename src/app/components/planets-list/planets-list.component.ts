import { Component, OnInit } from '@angular/core';
import { PlanetsService, Planet } from '../../services/planets.service';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.scss']
})
export class PlanetsListComponent implements OnInit {

  private subscription: Subscription | undefined;

  public planetsList: Planet[] = [];

  constructor(private planets: PlanetsService) {}

  ngOnInit(): void {
    this.subscription = this.planets.getPlanetsList().subscribe((planets: Planet[]) => {
      this.planetsList = planets;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
