import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, NgForm, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  // valueLock = true;
  // isDisable = false;
  mainForm: FormGroup;
  title = 'Form title';
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.mainForm = this.fb.group({
      firstInput : new FormControl("",Validators.required),
      secondInput : new FormControl("",Validators.required),
      thirdInput : new FormControl("",Validators.required),
      fourthInput : new FormControl("",Validators.required),
      fifthInput : new FormControl("",Validators.required),
      firstRadioButton: new FormControl({value:true}),
      secondRadioButton: new FormControl({value:true}),
    })
  }
  onSubmit(form) {
    console.log(form)
    form.markAllAsTouched();

  }

  // setValue(isDisable,FormControl) {
  //   this.valueLock = !this.valueLock;
  //   this.isDisable = !this.isDisable;
  //   isDisable ? FormControl.enable():FormControl.disable()
  // }
}
