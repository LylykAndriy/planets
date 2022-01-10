import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Planet, PlanetsService } from '../../services/planets.service';

@Component({
  selector: 'app-planet-item',
  templateUrl: './planet-item.component.html',
  styleUrls: ['./planet-item.component.scss']
})
export class PlanetItemComponent implements OnInit {

  public planet: Planet = {
    characters: '',
    description: '',
    image: '',
    name: '',
    region: '',
    species: '',
    system: ''
  };

  private planetName: string;

  constructor(private planets: PlanetsService, private activatedRoute: ActivatedRoute) {
    this.planetName = this.activatedRoute.snapshot.params['planetName'];
  }

  ngOnInit(): void {
    this.planets.getPlanetItem(this.planetName).subscribe((planet: Planet) => {
      this.planet = planet;
    });
  }
}
