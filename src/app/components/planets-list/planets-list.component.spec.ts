import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetsListComponent } from './planets-list.component';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('PlanetsListComponent', () => {
  let component: PlanetsListComponent;
  let fixture: ComponentFixture<PlanetsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetsListComponent ],
      providers: [
        {
          provide: HttpClient, useValue: {
            get: () => of()
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
