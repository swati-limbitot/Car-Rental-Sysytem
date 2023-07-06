import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { listModel } from './carlist/listModel'; 

@Injectable({
  providedIn: 'root'
})
export class ListapiService {
  url = "http://localhost:3000/cars";

  constructor(private http: HttpClient) { }

  //add 
  addcars(data: listModel) {
    return this.http.post<listModel>("http://localhost:3000/cars", data);
  }

  //get 
  getcars() {
    return this.http.get<listModel[]>("http://localhost:3000/cars");
  }

  //fetch data
  fetchdata(id: number) {
    return this.http.get<listModel>("http://localhost:3000/cars/" + id);
  }

  //delete
  deletecars(id: number) {
    return this.http.delete<listModel>("http://localhost:3000/cars/" + id)
  }

  //update
  lupdate(data: listModel, id: number) {
    return this.http.put<listModel>("http://localhost:3000/cars/" + id, data);
  }

  //search
  searchCars(name: string) {
    return this.http.get<any>(`${this.url}?name=${name}`);
  }
}
