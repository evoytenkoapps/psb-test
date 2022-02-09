import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ChildInterface } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  form = new FormGroup({
    parent: new FormControl('', Validators.required),
    child: new FormControl({
      indexChild: 'index!!!',
      adressChild: 'address',
    } as ChildInterface),
  });

  constructor() {}

  ngOnInit(): void {
    this.form.valueChanges.subscribe((data) => console.log('data', data));
    this.form.statusChanges.subscribe((status) =>
      console.log('status', status)
    );
  }
}
