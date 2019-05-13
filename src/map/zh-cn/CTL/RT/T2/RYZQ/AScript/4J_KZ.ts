import { OpenCloseField } from "../../../../../../../meta/RT/meta";
import { Map_ZH_CN } from "../../../../../ZH_CN";
import { Map_CTL_RT_T2_RYZQ_4J } from "./4J";
import { CountShowField } from "../../../../../../../meta/CountShowField";
import { CTL_RT_T2_RYZQ_Ts } from "../../../../../../../devices/CTL/RT/T2/AScript/RYZQ";

export class Map_CTL_RT_T2_RYZQ_4JKZ extends Map_CTL_RT_T2_RYZQ_4J{
    //4电极压力控制器2端火
    constructor(){
        super();
        this.addPoint(new CountShowField(Map_CTL_RT_T2_RYZQ_4J.KEY_BASE,CTL_RT_T2_RYZQ_Ts.KEY_POINT_YA_LI_STATUS, "压力状态",''));
        
        this.addPoint(new OpenCloseField("oc_ranshaoqifuhe_zengda", 9, 2, "燃烧器负荷增大调节", 1, Map_ZH_CN.coms_open_close));

        this.addPoint(new OpenCloseField("oc_fuhetiaojie", 5, 2, "负荷调节", 7, Map_ZH_CN.coms_open_close));
        this.addPoint(new OpenCloseField("oc_qitingkongzhi", 5, 2, "启停控制", 8, Map_ZH_CN.coms_open_close));
        
    }
    
}