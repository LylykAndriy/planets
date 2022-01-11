import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetItemComponent } from './planet-item.component';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

describe('PlanetItemComponent', () => {
  let component: PlanetItemComponent;
  let fixture: ComponentFixture<PlanetItemComponent>;
  let activatedRoute: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetItemComponent ],
      providers: [
        {
          provide: HttpClient, useValue: {
            get: () => of()
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
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
