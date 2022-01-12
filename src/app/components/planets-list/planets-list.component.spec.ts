import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetsListComponent } from './planets-list.component';
import { of } from 'rxjs';
import { PlanetsService } from '../../services/planets.service';

describe('PlanetsListComponent', () => {
  let component: PlanetsListComponent;
  let fixture: ComponentFixture<PlanetsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetsListComponent ],
      providers: [
        {
          provide: PlanetsService, useValue: {
            getPlanetsList: () => of()
          }
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
