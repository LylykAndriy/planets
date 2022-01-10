import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PlanetsService } from '../../services/planets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  form: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+$')]),
  });

  constructor(private planets: PlanetsService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.planets.emailAdd(true);
    this.router.navigate(["planets"]);
  }

}
