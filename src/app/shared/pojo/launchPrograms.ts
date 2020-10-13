import { filterType } from './types';

export interface Programs{
    mission_name:string;
    flight_number:number;
    mission_id:string[];
    launch_year:number;
    launch_success:boolean;
    land_success:boolean;
    src:string;
}

export interface Filters{
    launch_success?:string,
    land_success?:string,
    launch_year?:string
}
export interface Filter{
    filterType:filterType,
    val:string
}
