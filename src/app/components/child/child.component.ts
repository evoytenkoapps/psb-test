import { Component, forwardRef, OnInit } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ChildComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ChildComponent),
      multi: true,
    },
  ],
})
export class ChildComponent implements OnInit, ControlValueAccessor {
  public childForm = new FormGroup({
    adressChild: new FormControl('', [
      Validators.required,
      Validators.maxLength(4),
    ]),
    indexChild: new FormControl('', Validators.required),
  });

  public onTouched: () => void = () => {};

  constructor() {}

  ngOnInit(): void {}

  registerOnChange(fn: any): void {
    this.childForm.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {}

  writeValue(obj: any): void {
    console.log('writeValue', obj);
  }

  validate(c: AbstractControl): ValidationErrors | null {
    console.log('Basic Info validation', c);
    return this.childForm.valid
      ? null
      : {
          invalidForm: {
            valid: false,
            message: 'basicInfoForm fields are invalid',
          },
        };
  }
}
