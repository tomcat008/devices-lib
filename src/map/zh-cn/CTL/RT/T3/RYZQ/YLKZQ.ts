import { ZH_CN } from "../../../../ZH_CN";
import { OpenCloseField } from "../../../../../../meta/RT/meta";
import { CTL_RT_RY } from "../../../../../../devices/CTL/RT/RY";
import { CTL_RT_T3_RYZQ_Ts } from "../AScript/RYZQ";

export = class CTL_RT_T3_RYZQ_YLKZQ extends CTL_RT_T3_RYZQ_Ts {

    constructor() {
        super();

        this.warningMsg='';
        this.addPoint(new OpenCloseField("oc_fuhetiaojie", 5, 2, "负荷调节",7,ZH_CN.coms_open_close));
        this.addPoint(new OpenCloseField("oc_qitingkongzhi", 5, 2, "启停控制",8,ZH_CN.coms_open_close));
        
        this.addPoint(new OpenCloseField(CTL_RT_RY.KEY_POINT_RAN_SHAO_QI_KONGZHI, 9, 2, "燃烧器启停控制",0,ZH_CN.coms_open_close));
        this.addPoint(new OpenCloseField("oc_ranshaoqifuhetiaojie", 9, 2, "燃烧器调节",1,ZH_CN.coms_open_close));
    }
}
