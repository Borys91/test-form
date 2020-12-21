import { Component, forwardRef, HostBinding, Input } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true
    }
  ]
})
export class CustomInputComponent implements  ControlValueAccessor {
  myInput:string;
  @Input() required: any;
  @Input() disabled: any;
  constructor() { }

  onChange: any = () => {}
  onTouch: any = () => {}
  val= "";

  set value(val){
    if( val !== undefined && this.val !== val){
    this.val = val.value;
    this.myInput = val.value;
    this.onChange(this.val)
    this.onTouch(this.val)
    }
  }

  writeValue(value: any){
    this.value = value;
  }

  registerOnChange(fn: any){
    this.onChange = fn;

  }
  setDisabledState?(isDisabled:boolean):void {
    this.disabled = isDisabled;
  }

  registerOnTouched(fn: any){
    this.onTouch = fn;

  }
  clearValue() {
    this.myInput = '';
    this.val = '';
    this.onChange(this.val);
    this.onTouch(this.val);
  }
  changeValue(event) {
   this.value =  event.target;
  }
}
