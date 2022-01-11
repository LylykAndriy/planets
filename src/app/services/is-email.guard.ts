import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { PlanetsService } from "./planets.service";

@Injectable({
  providedIn: 'root'
})
export class IsEmailGuard implements CanActivate {
  constructor(private planets: PlanetsService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.planets.emailAdded();
  }

}
