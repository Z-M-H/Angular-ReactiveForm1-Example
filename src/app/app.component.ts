import { Component } from '@angular/core';
import {FormArray, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive-form-app';

  constructor(private formBuilder: FormBuilder) {}

  /*
  userForm = new FormGroup({
    name: new FormControl('Snow Dan'),
    password: new FormControl('***'),
    email: new FormControl('snow.dan@gmail.com')
  })
   */

  uForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    password: [''],
    email: ['example@gmail.com'],
    alternateEmails: this.formBuilder.array([])
  })

  get alternateEmails() {
    return this.uForm.get('alternateEmails') as FormArray
  }

  addAlternateEmails() {
    this.alternateEmails.push(this.formBuilder.control('xxx@gmail.com'))
  }
}
