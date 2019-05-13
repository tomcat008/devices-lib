import { OpenCloseField } from "../../../../../../../meta/RT/meta";
import { Map_ZH_CN } from "../../../../../ZH_CN";
import { Map_CTL_RT_T2_RYZQ_6J } from "./6J";
import { CTL_RT_T2_RYZQ_Ts } from "../../../../../../../devices/CTL/RT/T2/AScript/RYZQ";
import { CountShowField } from "../../../../../../../meta/CountShowField";

export class Map_CTL_RT_T2_RYZQ_6JKZ extends Map_CTL_RT_T2_RYZQ_6J{
    //4电极压力控制器2端火
    constructor(){
        super();
        this.addPoint(new CountShowField(Map_CTL_RT_T2_RYZQ_6JKZ.KEY_BASE,CTL_RT_T2_RYZQ_Ts.KEY_POINT_YA_LI_STATUS, "压力状态",''));
        this.addPoint(new OpenCloseField("oc_ranshaoqifuhe_zengda", 9, 2, "燃烧器负荷增大调节", 1, Map_ZH_CN.coms_open_close));
        this.addPoint(new OpenCloseField("oc_fuhetiaojie", 5, 2, "负荷调节", 7, Map_ZH_CN.coms_open_close));
        this.addPoint(new OpenCloseField("oc_qitingkongzhi", 5, 2, "启停控制", 8, Map_ZH_CN.coms_open_close));
        this.addPoint(new OpenCloseField("oc_dishuiweibaojingdianji_6dianjiteyou_", 5, 2, "低水位报警电极（6电极特有）", 1, Map_ZH_CN.coms_open_close));
        this.addPoint(new OpenCloseField("oc_zhongshuiweidianji_6dianjiteyou_", 5, 2, "中水位电极（6 电极特有）", 3, Map_ZH_CN.coms_open_close));
    
    }
    
}