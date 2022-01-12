import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

const PLANETS_URL = 'http://private-anon-4ab7e07a76-starhub.apiary-mock.com/api/planets';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  private emailChange = new BehaviorSubject(localStorage.getItem('planets_email') !== null);

  public isEmailAdded$ = this.emailChange.asObservable();

  constructor(private http: HttpClient) { }

  public changeEmail(message: boolean, email?: string): void {
    message ? localStorage.setItem('planets_email', email || '') : localStorage.removeItem('planets_email');
    let result = message || (localStorage.getItem('planets_email') !== null);
    this.emailChange.next(result);
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
