import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'BarCodeAndQRCodeReader';
  testForm: FormGroup;
  public data: any = null;
  displayQRCode:boolean = false;
  displayBarCode:boolean = false;
  submitted: boolean = false;
  needToQRCodeConvert:any;
  constructor (private formBuilder: FormBuilder) {
    // assign a value
  }

  ngOnInit(): void {
   this.testForm = this.formBuilder.group({
    value:['', Validators.required]
   });
  
  }
  generateQRCode(){
    this.submitted = true;
    if(this.testForm.invalid){
      this.displayQRCode = false;
      this.displayBarCode = false;
      return;
    }

    this.displayBarCode = false;
    this.displayQRCode = true;
    this.data = this.testForm.value.value;
    this.submitted = false;
  }
  generateBarCode(){
    this.submitted = true;
    if(this.testForm.invalid){
      this.displayBarCode = false;
      this.displayQRCode = false;
      return;
    }
    this.displayQRCode = false;
    this.displayBarCode = true;
    this.data = this.testForm.value.value;
    this.submitted = false;
  }
}
