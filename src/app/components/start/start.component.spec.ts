import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartComponent } from './start.component';
import { PlanetsService } from '../../services/planets.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('StartComponent', () => {
  let component: StartComponent;
  let fixture: ComponentFixture<StartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule, ReactiveFormsModule ],
      declarations: [ StartComponent ],
      providers: [
        {
          provide: PlanetsService, useValue: {}
        }
    ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
