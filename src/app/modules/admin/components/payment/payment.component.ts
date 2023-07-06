import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { bmodel } from './payment';
import { PaymentserviceService } from 'src/app/paymentservice.service';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})

export class PaymentComponent {

  bform!: FormGroup;
  bdata: undefined | bmodel[];

  constructor(private formbuilder: FormBuilder, private bapi: PaymentserviceService) { }

  ngOnInit(): void {
    this.bform = this.formbuilder.group({
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
    this.getBaby();
  }

  get date() {
    return this.bform.get('date');
  }

  get fname() {
    return this.bform.get('name');
  }

  get lname() {
    return this.bform.get('name');
  }

  get time() {
    return this.bform.get('time');
  }

  get mom() {
    return this.bform.get('mom');
  }

  get dad() {
    return this.bform.get('dad');
  }

  get contact() {
    return this.bform.get('contact');
  }

  get address() {
    return this.bform.get('address');
  }

  get gender() {
    return this.bform.get('name');
  }

  addBaby(bdata: bmodel) {
    this.bapi.addBaby(bdata).subscribe((res => {
      this.bform.reset();
    }))
    this.getBaby();
    alert("Book Car");
  }

  getBaby() {
    this.bapi.getBaby().subscribe(res => {
      this.bdata = res;
    })
  }

  deleteBaby(bdata: any) {
    this.bapi.deleteBaby(bdata.id).subscribe(res => {
      this.getBaby();
    })
    alert("Delete Data");
  }

  searchBaby(event: any) {
    if (event.target.value) {
      this.bapi.searchBaby(event.target.value).subscribe(res => {
        this.bdata = res;
      })
    } else {
      this.getBaby();
    }
  }
}