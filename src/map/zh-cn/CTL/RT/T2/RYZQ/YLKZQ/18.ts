import { ExceptionField,OpenCloseField } from "../../../../../../../meta/RT/meta";
import { CTL_RT_T2_RYZQ_Ts } from "../../AScript/RYZQ";
import { ZH_CN } from "../../../../../ZH_CN";



export = class CTL_RT_T2_RYZQ_YLKZQ_18 extends CTL_RT_T2_RYZQ_Ts{
    constructor(){
        super();
        this.warningMsg='';
        this.addPoint(new OpenCloseField("oc_ranshaoqifuhetiaojie", 9, 2, "燃烧器负荷增大调节", 1, ZH_CN.coms_open_close));
        
        this.addPoint(new ExceptionField("ex_ranqiyaligaobaojing", 45, 2, "燃气压力高报警", 15));
        this.addPoint(new ExceptionField("ex_ranqixieloubaojing", 47, 2, "燃气泄漏报警", 0));
        this.addPoint(new ExceptionField("ex_ranshaoqiguzhang", 47, 2, "燃烧器故障", 1));

    }
}