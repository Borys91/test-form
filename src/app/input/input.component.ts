import { Component, forwardRef, OnInit, Self,  } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormBuilder ,FormGroup ,ControlValueAccessor, Validators, NG_VALIDATORS, NgControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputComponent,
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: InputComponent,
      multi: true
    }
  ]
})
export class InputComponent implements OnInit, ControlValueAccessor  {
  value = '';
  valueLock = true;
  isDisable = false;
  changeValue: () => void;
  inputForm:FormGroup;
  constructor(
    private fb: FormBuilder ,
    ) {}

  ngOnInit(): void {
    this.inputForm = this.fb.group({
      inputValue:[{value:"",disabled:this.isDisable},Validators.required]
    })
  }
  writeValue(value:any) {
    if(value) {
      this.inputForm.setValue(value);
    }
  }
  registerOnChange(fn: any) {
    this.inputForm.valueChanges.subscribe(fn );
  }
  registerOnTouched(fn: any) {
    this.inputForm.valueChanges.subscribe(fn);
  }
  setDisabledState?(isDisabled:boolean):void {

  }
  onChange(value) {
    this.value = value;
  }
  setValue(isDisable) {
    this.valueLock = !this.valueLock;
    this.isDisable = !this.isDisable;
    isDisable ? this.inputForm.enable():this.inputForm.disable()
  }
}
