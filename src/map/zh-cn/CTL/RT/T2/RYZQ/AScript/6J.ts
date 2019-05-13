import { OpenCloseField } from "../../../../../../../meta/RT/meta";
import { Map_ZH_CN } from "../../../../../ZH_CN";
import { INumberIndex } from "../../../../../../../entities/IIndex";
import { Map_CTL_RT_T2_RYZQ_4J } from "./4J";

export class Map_CTL_RT_T2_RYZQ_6J extends Map_CTL_RT_T2_RYZQ_4J{

    static ShuiWeiStatus: INumberIndex = {
        0: '故障',
        1: '缺水',
        2: '缺水报警',
        3: '低位',
        4: '中位',
        5: '高位',
        6: '超高报警'
    }

    //4电极压力变送器内置比调
    constructor(){
        super();
       
        this.addPoint(new OpenCloseField("oc_dishuiweibaojingdianji_6dianjiteyou_", 5, 2, "低水位报警电极", 1, Map_ZH_CN.coms_open_close));
        this.addPoint(new OpenCloseField("oc_zhongshuiweidianji_6dianjiteyou_", 5, 2, "中水位电极", 3, Map_ZH_CN.coms_open_close));
        

    }
    
}