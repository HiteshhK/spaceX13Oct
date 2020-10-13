import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Filter } from 'src/app/shared/pojo/launchPrograms';
import { filterType } from 'src/app/shared/pojo/types';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  yearsFilter:Array<number> = [6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
  @Output()filter:EventEmitter<Filter> = new EventEmitter();
  constructor() { }
  selectedButtons:{launch_year:string,launch_success:string,land_success:string}={
    land_success:undefined,
    launch_year:undefined,
    launch_success:undefined
  }
  ngOnInit(): void {
  }
  applyFilter(filterType:filterType,val:string){
    this.selectedButtons[filterType] = val;
    this.filter.emit({filterType,val});
  }
}
