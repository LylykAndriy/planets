import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const PLANETS_URL = 'http://private-anon-4ab7e07a76-starhub.apiary-mock.com/api/planets';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  private isEmail: boolean = false;

  constructor(private http: HttpClient) { }

  emailAdded(): boolean {
    return this.isEmail;
  }

  emailAdd(isEmail: boolean): void {
    this.isEmail = isEmail;
  }

  public getPlanetsList(): Observable<Planet[]> {
    return this.http.get<Planet[]>(PLANETS_URL);
  }

  public getPlanetItem(planetName: string): Observable<Planet> {
    return this.http.get<Planet>(`${PLANETS_URL}/${planetName}`);
  }
}

export interface Planet {
  characters: string;
  description: string;
  image: string;
  name: string;
  region: string;
  species: string;
  system: string;
}
