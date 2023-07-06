import { Injectable } from '@angular/core';
import { bmodel } from './modules/admin/components/payment/paymet';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentserviceService {
  baseurl: string = "http://localhost:3000/payment/";

  

  constructor(private http: HttpClient) { }

  addBaby(bdata: bmodel) {
    return this.http.post<bmodel>(this.baseurl, bdata)
  }

  getBaby() {
    return this.http.get<bmodel[]>(this.baseurl);
  }

  deleteBaby(id: number) {
    return this.http.delete<bmodel>(this.baseurl + id);
  }

  updateBaby(bdata: bmodel, id: number) {
    return this.http.put<bmodel>(this.baseurl + id, bdata);
  }

  fetchData(id: number) {
    return this.http.get<bmodel>(this.baseurl + id);
  }

  searchBaby(fname: string) {
    return this.http.get<any>(`${this.baseurl}?fname=${fname}`);
  }
}