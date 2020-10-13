import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Filter, Filters, Programs } from 'src/app/shared/pojo/launchPrograms';
import {HttpService} from '../../services/http.service';
import {filterType} from '../../shared/pojo/types'
@Component({
  selector: 'app-spacex-container',
  templateUrl: './space-xcontainer.component.html',
  styleUrls: ['./space-xcontainer.component.css']
})
export class SpaceXcontainerComponent implements OnInit {

  constructor(private http:HttpService) { }
  observable:Observable<Programs[]> = null;
  filters:Filters={}
  ngOnInit(): void {
    this.observable = this.http.getPrograms({});
  }
//need to implement two way binding
  applyFilter(event:Filter){
    this.filters[event.filterType] = event.val;
    this.observable = this.http.getPrograms(this.filters);

  }


}
