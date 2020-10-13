import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from '../../environments/environment';
import {filter, map} from 'rxjs/operators';
import {Programs} from '../shared/pojo/launchPrograms';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
 baseUrl:string = environment.baseUrl;
  constructor(private http:HttpClient) { }

  getPrograms(params:{launch_success?:string,land_success?:string,launch_year?:string}){
    if(!params.land_success)delete params.land_success; 
    if(!params.launch_success)delete params.launch_success; 
    if(!params.launch_year)delete params.launch_year; 
    return this.http.get(this.baseUrl,{params}).pipe(map(program=>{
      let programs=[];
      (<Array<any>>program).map(x=>{
      let temp:Programs = {
        flight_number:x.flight_number,
        launch_success:x.launch_success,
        launch_year:x.launch_year,
        mission_id:x.mission_id,
        mission_name:x.mission_name,
        src:x.links.mission_patch_small,
        land_success:x.rocket.first_stage.cores[0].land_success
      };
        programs.push(temp);
      })
      
      return programs;
    })
    )
  }

}
