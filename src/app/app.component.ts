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
  public qrCode: any = null;
  displayQRCode:boolean = false;
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
      return;
    }

    this.displayQRCode = true;
    this.qrCode = this.testForm.value.value;
    this.submitted = false;
  }
}
