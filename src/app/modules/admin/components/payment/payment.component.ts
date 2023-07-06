import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



import { bmodel } from './paymet'; 
import { PaymentserviceService } from 'src/app/paymentservice.service';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})

export class PaymentComponent {

  pform!: FormGroup;
  pdata: undefined | bmodel[];

  constructor(private formbuilder: FormBuilder, private bapi: PaymentserviceService) { }

  ngOnInit(): void {
    this.pform = this.formbuilder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      startdate: ['', Validators.required],
      enddate: ['', Validators.required],
      mom: ['', Validators.required],
      dad: ['', Validators.required],
      contact: ['', Validators.required],
      address: ['', Validators.required],
      gender: ['', Validators.required]
    })
    this.getpay();
  }

  get date() {
    return this.pform.get('date');
  }

  get fname() {
    return this.pform.get('name');
  }

  get lname() {
    return this.pform.get('name');
  }

  get time() {
    return this.pform.get('time');
  }

  get mom() {
    return this.pform.get('mom');
  }

  get dad() {
    return this.pform.get('dad');
  }

  get contact() {
    return this.pform.get('contact');
  }

  get address() {
    return this.pform.get('address');
  }

  get gender() {
    return this.pform.get('name');
  }

  addpay(bdata: bmodel) {
    this.bapi.addpay(bdata).subscribe((res => {
      this.pform.reset();
    }))
    this.getpay();
    alert("Book Car");
  }

  getpay() {
    this.bapi.getpay().subscribe(res => {
      this.pdata = res;
    })
  }

  deletepay(bdata: any) {
    this.bapi.deletepay(bdata.id).subscribe(res => {
      this.getpay();
    })
    alert("Delete Data");
  }

  searchpay(event: any) {
    if (event.target.value) {
      this.bapi.searchpay(event.target.value).subscribe(res => {
        this.pdata = res;
      })
    } else {
      this.getpay();
    }
  }
}