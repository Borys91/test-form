import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators , NgForm} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  mainForm:FormGroup;
  title = 'Form title';
  constructor(private fb: FormBuilder) { }
  isDisable = true;
  ngOnInit(): void {
    this.mainForm = this.fb.group({
      firstRadioButton: [{value:true}],
      secondRadioButton: [{value:true}],
      firstInput: ["",Validators.required],
      secondInput:["",Validators.required],
      thirdInput:["",Validators.required],
      fourthInput:["",Validators.required],
      fifthInput:["",Validators.required],
    })
  }
  next(form) {
    console.log(form)
  }
}
