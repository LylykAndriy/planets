import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlanetsService } from '../../services/planets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  public form: FormGroup = this.formBuilder.group({});

  constructor(private planets: PlanetsService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.pattern('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+$')]],
    });
  }

  public onSubmit(): void {
    this.planets.changeEmail(true, this.form.get('email')?.value);
    this.router.navigate(["planets"]);
  }

}
