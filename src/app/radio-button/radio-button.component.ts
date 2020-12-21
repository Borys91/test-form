import { FormBuilder ,FormGroup , ControlValueAccessor ,NG_VALUE_ACCESSOR}  from '@angular/forms';
import { Component, OnInit ,forwardRef ,Input} from '@angular/core';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';


@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
  providers: [
  {
    provide: MAT_RADIO_DEFAULT_OPTIONS,
    useValue: { color: 'primary' },
  },
  {
    provide:NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RadioButtonComponent),
    multi:true
  }
  ]
})
export class RadioButtonComponent implements OnInit, ControlValueAccessor{
  yesNoForm:FormGroup;
  valueLock = true;
  isDisable = false;
  val = true;
  onChange: any = () => {}
  onTouch: any = () => {}
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.yesNoForm = this.fb.group({
      value: this.val
    });

  }
  set value(value) {

    if(!!value){
      this.val = value;
      this.onChange(value);
      this.onTouch();
    }
  }
  writeValue(value:any) {
    if(value) {
      this.yesNoForm.setValue(value);
    }
  }
  registerOnChange(fn: any) {
    this.yesNoForm.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any) {
    this.yesNoForm.valueChanges.subscribe(fn);
  }
  setValue(isDisable) {
    this.valueLock = !this.valueLock;
    this.isDisable = !this.isDisable;
    isDisable ? this.yesNoForm.enable():this.yesNoForm.disable()
  }



}
