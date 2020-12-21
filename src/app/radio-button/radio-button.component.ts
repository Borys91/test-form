import { FormBuilder ,FormGroup , ControlValueAccessor ,NG_VALUE_ACCESSOR}  from '@angular/forms';
import { Component ,forwardRef ,Input} from '@angular/core';
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
export class RadioButtonComponent implements  ControlValueAccessor{
  myRadioButton;
  answers:string[] = ["No","Yes"]
  // yesNoForm:FormGroup;
  // valueLock = true;
  // isDisable = false;
  val = '';
  onChange: any = () => {}
  onTouch: any = () => {}
  constructor() { }
  // ngOnInit(): void {
  //   this.yesNoForm = this.fb.group({
  //     value: this.val
  //   });
  // }
  set value(val) {
    if(val !== undefined && this.val !== val){
      this.val = val;
      this.onChange(this.val);
      this.onTouch(this.val);
    }
  }
  writeValue(value:any) {
    console.log(value.value)
    if(value) {
      this.myRadioButton = value.value
    }
  }
  registerOnChange(fn: any) {
    this.onChange = fn;

  }
  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }
  // setValue(isDisable) {
  //   this.valueLock = !this.valueLock;
  //   this.isDisable = !this.isDisable;
  // }
  changeValue(event) {
    this.value =  event.value;
    // console.log(this.myRadioButton)
  }




}
