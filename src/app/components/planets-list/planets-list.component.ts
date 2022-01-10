import { Component, OnInit } from '@angular/core';
import { PlanetsService, Planet } from '../../services/planets.service';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.scss']
})
export class PlanetsListComponent implements OnInit {

  public planetsList: Planet[] = [];

  constructor(private planets: PlanetsService) {}

  ngOnInit(): void {
    this.planets.getPlanetsList().subscribe((planets: Planet[]) => {
      this.planetsList = planets;
    });
  }

}
