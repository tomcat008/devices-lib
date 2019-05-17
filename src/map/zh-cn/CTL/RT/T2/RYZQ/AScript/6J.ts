import { OpenCloseField } from "../../../../../../../meta/RT/meta";
import { Map_ZH_CN } from "../../../../../ZH_CN";
import { INumberIndex } from "../../../../../../../entities/IIndex";
import { Map_CTL_RT_T2_RYZQ_4J } from "./4J";
import { CountShowField } from "../../../../../../../meta/CountShowField";

export class Map_CTL_RT_T2_RYZQ_6J extends Map_CTL_RT_T2_RYZQ_4J{

    static ShuiWeiStatus: INumberIndex = {
        0: '缺水',
        1: '低位报警',
        2: '低位',
        3: '中低位',
        4: '中位',
        5: '高位',
        6: '超高报警'
    }

    //4电极压力变送器内置比调
    constructor(){
        super();
        this.addPoint(new CountShowField(Map_CTL_RT_T2_RYZQ_4J.KEY_BASE,Map_CTL_RT_T2_RYZQ_6J.KEY_POINT_SHUI_WEI_STATUS, "水位",'',false,Map_CTL_RT_T2_RYZQ_6J.ShuiWeiStatus));

        this.addPoint(new OpenCloseField("oc_dishuiweibaojingdianji_6dianjiteyou_", 5, 2, "低水位报警电极", 1, Map_ZH_CN.coms_open_close));
        this.addPoint(new OpenCloseField("oc_zhongshuiweidianji_6dianjiteyou_", 5, 2, "中水位电极", 3, Map_ZH_CN.coms_open_close));
        

    }
    
}