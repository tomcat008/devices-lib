import {map as ParentClass } from '../map'
import { INumberIndex } from '../../entities/IIndex';

export abstract class Map_EN_US extends ParentClass{
    
    static coms_media:INumberIndex= {
        0:"Water",
        1:"Steam",
        2:"Oil",
        3:"Hot Air",
        4:"Vacuum"    
    }
    static coms_power:INumberIndex={
        0:"Oil/Gas",
        1:"Electric",
        2:"Coal",
        3:"Biomass",
        30:"Waste Heat"
    }
    static coms_open_close:INumberIndex={
        0:"Close",
        1:"Open"
    }
    static coms_start_stop:INumberIndex={
        0:"Stop",
        1:"Start"
    }
    static coms_level:INumberIndex={
        0:"Water Shortage",
        1:"Low Alarm",
        2:"Low Position",
        3:"Normal",
        4:"High Position",
        5:"Super High",
        6:"Logic Error",
    }

    getPowerString(key:number):string{
        return Map_EN_US.coms_power[key];
    }
    getMediaString(key:number):string{
        return Map_EN_US.coms_media[key];
    }
}