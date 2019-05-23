import { OpenCloseField } from "../../../../../../../meta/RT/meta";
import { Map_EN_US } from "../../../../../EN_US";
import { INumberIndex } from "../../../../../../../entities/IIndex";
import { Map_CTL_RT_T2_RYZQ_4J } from "./4J";

export class Map_CTL_RT_T2_RYZQ_6J extends Map_CTL_RT_T2_RYZQ_4J{

    static ShuiWeiStatus: INumberIndex = {
        0: 'Water shortage',
        1: 'Low level alarm',
        2: 'Low position',
        3: 'Middle low position',
        4: 'Median position',
        5: 'High position',
        6: 'Super high alarm'
    }

    //4电极压力变送器内置比调
    constructor(){
        super();
       
        this.addPoint(new OpenCloseField("oc_dishuiweibaojingdianji_6dianjiteyou_", 5, 2, "Low Water Level Alarm Electrode", 1, Map_EN_US.coms_open_close));
        this.addPoint(new OpenCloseField("oc_zhongshuiweidianji_6dianjiteyou_", 5, 2, "Medium water level electrode", 3, Map_EN_US.coms_open_close));
        

    }
    
}