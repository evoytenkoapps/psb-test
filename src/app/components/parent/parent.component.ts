import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  form = new FormGroup({
    parent: new FormControl('', Validators.required),
    child: new FormGroup({
      adress: new FormControl('', Validators.required),
      index: new FormControl('', Validators.required),
    }),
  });

  constructor() {}

  ngOnInit(): void {
    this.form.valueChanges.subscribe((data) => console.log('data', data));
  }
}
