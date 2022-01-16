import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataService } from './data.service';
import { Car } from './model/car';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  cars: Car[] = [];
  isLoading = true;

  pageIndex: number = 0;
  bufferSize: number = 8;

  constructor(private dataService: DataService){}
  
  
  ngOnInit(): void {
    this.fetchMore(); 
  }


  endOfScrollHandler(){
    // mark the loading:
    this.isLoading = true;
    
    // increment the page index to fetch the next page of data:
    this.pageIndex++;
    
    // load the next page of data:
    this.fetchMore();
  }

  fetchMore(){
    this.dataService.fetchCars(this.pageIndex, this.bufferSize).subscribe(
      (data: Car[]) => {
        this.cars = this.cars.concat(data);
        this.isLoading = false;
      }
    );
  }

  onNgSelectOpen(){
    // get back the intial list of cars:
    this.cars = [];
    this.pageIndex = 0;
    this.fetchMore();
  }
}
