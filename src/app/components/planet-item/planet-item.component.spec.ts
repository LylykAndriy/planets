import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetItemComponent } from './planet-item.component';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { PlanetsService } from '../../services/planets.service';

describe('PlanetItemComponent', () => {
  let component: PlanetItemComponent;
  let fixture: ComponentFixture<PlanetItemComponent>;
  let activatedRoute: ActivatedRoute;
  let planetsService: PlanetsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetItemComponent ],
      providers: [
        {
          provide: PlanetsService, useValue: {
            getPlanetItem: () => of()
          }
        },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: {
                planetName: 'Tatooine'
              }
            }
          }
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetItemComponent);
    activatedRoute = TestBed.inject(ActivatedRoute);
    planetsService = TestBed.inject(PlanetsService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call planet info with correct name', () => {
    const getPlanetItemOf = spyOn(planetsService, 'getPlanetItem').and.callThrough();
    component.planetName = 'Kamino';
    component.ngOnInit();
    expect(getPlanetItemOf).toHaveBeenCalledWith('Kamino');
  });
});
