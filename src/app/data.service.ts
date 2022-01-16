import { Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import {delay} from 'rxjs/operators'
import { Car } from './model/car';

@Injectable({
  providedIn: 'root'
})
export class DataService { 
  cars: Car[];

  constructor() {
    this.initializeCars();
  }

  fetchCars(pageIndex: number, pageSize: number): Observable<Car[]>{
    const startIndex = pageIndex * pageSize;
    const endIndex = startIndex + pageSize;
    return of(this.cars.slice(startIndex, endIndex)).pipe(delay(200));
  }


  initializeCars(){
    this.cars = [
      {id: 1, name: "Volvo"},
      {id: 2, name: "Range Rover"},
      {id: 3, name: "Tesla"},
      {id: 4, name: "Mercedes"},
      {id: 5, name: "Dacia"},
      {id: 6, name: "Honda"},
      {id: 7, name: "Huyndai"},
      {id: 8, name: "Duster"},
      {id: 9, name: "Toyota"},
      {id: 10, name: "Fiat"},
      {id: 11, name: "Mazerati"},
      {id: 12, name: "Seat"},
      {id: 13, name: "Opel"},
      {id: 14, name: "Car 14"},
      {id: 15, name: "Car 15"},
      {id: 16, name: "Car 16"},
      {id: 17, name: "Car 17"},
      {id: 18, name: "Car 18"},
      {id: 19, name: "Car 19"},
      {id: 20, name: "Car 20"},
      {id: 21, name: "Car 21"},
      {id: 22, name: "Car 22"},
      {id: 23, name: "Car 23"},
      {id: 24, name: "Car 24"},
      {id: 25, name: "Car 25"},
      {id: 26, name: "Car 26"},
      {id: 27, name: "Car 27"},
      {id: 28, name: "Car 28"},
      {id: 29, name: "Car 29"},
      {id: 30, name: "Car 30"},
      {id: 31, name: "Car 31"},
      {id: 32, name: "Car 32"},
      {id: 33, name: "Car 33"},
      {id: 34, name: "Car 34"},
      {id: 35, name: "Car 35"},
      {id: 36, name: "Car 36"},
      {id: 37, name: "Car 37"},
      {id: 38, name: "Car 38"},
      {id: 39, name: "Car 39"},
      {id: 40, name: "Car 40"},
      {id: 41, name: "Car 41"},
      {id: 42, name: "Car 42"},
      {id: 43, name: "Car 43"},
      {id: 44, name: "Car 44"},
      {id: 45, name: "Car 45"},
      {id: 46, name: "Car 46"},
      {id: 47, name: "Car 47"},
      {id: 48, name: "Car 48"},
      {id: 49, name: "Car 49"},
      {id: 50, name: "Car 50"},
      {id: 51, name: "Car 51"},
      {id: 52, name: "Car 52"}
    ];  
  }

}

