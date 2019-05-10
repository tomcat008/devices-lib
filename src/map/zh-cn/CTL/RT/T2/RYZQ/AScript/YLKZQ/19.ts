import { OpenCloseField, ExceptionField } from "../../../../../../../../meta/RT/meta";
import { Map_ZH_CN } from "../../../../../../ZH_CN";
import { Map_CTL_RT_T2_RYZQ_Ts } from "../../../RYZQ_Base";


export class Map_CTL_RT_T2_RYZQ_YLKZQ_19 extends Map_CTL_RT_T2_RYZQ_Ts{
    constructor(){
        super();
        // this.warningMsg='';
        this.addPoint(new OpenCloseField("oc_yalikongzhiqi1", 5, 2, "压力控制器（一段火）", 7, Map_ZH_CN.coms_open_close));
        this.addPoint(new OpenCloseField("oc_yalikongzhiqi2", 5, 2, "压力控制器（二段火）", 8, Map_ZH_CN.coms_open_close));

        this.addPoint(new OpenCloseField("oc_ranshaoqifuhe_zengda", 9, 2, "燃烧器负荷增大调节", 1, Map_ZH_CN.coms_open_close));
        this.addPoint(new OpenCloseField("oc_ranshaoqifuhe_jianxiao", 9, 2, "燃烧器负荷减小调节", 2, Map_ZH_CN.coms_open_close));

        this.addPoint(new ExceptionField("ex_chaoyabaojing", 45, 2, "超压报警", 13));
        
        this.addPoint(new ExceptionField("ex_ranqiyaligaobaojing", 47, 2, "燃气压力高报警", 0));
        this.addPoint(new ExceptionField("ex_ranqixieloubaojing", 47, 2, "燃气泄漏报警", 1));
        this.addPoint(new ExceptionField("ex_ranshaoqiguzhang", 47, 2, "燃烧器故障", 2));

    }
}