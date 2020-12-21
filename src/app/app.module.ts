import { BrowserModule } from '@angular/platform-browser';
import {  NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { RadioButtonComponent } from './radio-button/radio-button.component';


import  {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import { FormComponent } from './form/form.component';
import { CustomInputComponent } from './custom-input/custom-input.component';



@NgModule({
  declarations: [
    AppComponent,
    RadioButtonComponent,
    FormComponent,
    CustomInputComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
