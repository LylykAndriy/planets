import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PlanetsService } from '../../services/planets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  public form = this.formBuilder.group({
    email: [null, [Validators.required, Validators.pattern('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+$')]],
  });

  constructor(private planets: PlanetsService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    localStorage.setItem('planets_email', this.form.get('email')?.value);
    this.planets.emailAdd(true);
    this.router.navigate(["planets"]);
  }

}
