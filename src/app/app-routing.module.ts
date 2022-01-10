import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetsListComponent } from './components/planets-list/planets-list.component';
import { PlanetItemComponent } from './components/planet-item/planet-item.component';
import { StartComponent } from './components/start/start.component';
import { IsEmailGuard } from "./services/is-email.guard";

const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'planets', component: PlanetsListComponent, canActivate: [IsEmailGuard] },
  { path: 'planet/:planetName', component: PlanetItemComponent, canActivate: [IsEmailGuard] },
  { path: '**', component: StartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
