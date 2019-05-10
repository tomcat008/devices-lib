import {map as ParentClass } from '../map'
import { INumberIndex } from '../../entities/IIndex';

export abstract class Map_ZH_CN extends ParentClass{
    
    static coms_media:INumberIndex= {
        0:"热水",
        1:"蒸汽",
        2:"导热油",
        3:"热风",
        4:"真空"    
    }
    static coms_power:INumberIndex={
        0:"油气",
        1:"电",
        2:"煤",
        3:"生物质",
        30:"余热"
    }
    static coms_open_close:INumberIndex={
        0:"关",
        1:"开"
    }
    static coms_start_stop:INumberIndex={
        0:"停",
        1:"启"
    }
    static coms_level:INumberIndex={
        0:"缺水",
        1:"低报警",
        2:"低位",
        3:"正常",
        4:"高位",
        5:"超高位",
        6:"逻辑错",
    }

    getPowerString(key:number):string{
        return Map_ZH_CN.coms_power[key];
    }
    getMediaString(key:number):string{
        return Map_ZH_CN.coms_media[key];
    }
}