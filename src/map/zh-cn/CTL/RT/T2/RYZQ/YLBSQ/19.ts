import { OpenCloseField, ExceptionField } from "../../../../../../../meta/RT/meta";
import { ZH_CN } from "../../../../../ZH_CN";
import { CTL_RT_T2_RYZQ_YLBSQ } from "../YLBSQ";


export = class CTL_RT_T2_RYZQ_YLBSQ_19 extends CTL_RT_T2_RYZQ_YLBSQ{
    constructor(){
        super();
        // this.warningMsg='';
        this.addPoint(new OpenCloseField("oc_yalikongzhiqi1", 5, 2, "压力控制器（一段火）", 7, ZH_CN.coms_open_close));
        this.addPoint(new OpenCloseField("oc_yalikongzhiqi2", 5, 2, "压力控制器（二段火）", 8, ZH_CN.coms_open_close));
        this.addPoint(new ExceptionField("ex_ranqiyaligaobaojing", 47, 2, "燃气压力高报警", 0));
        this.addPoint(new ExceptionField("ex_ranqixieloubaojing", 47, 2, "燃气泄漏报警", 1));
        this.addPoint(new ExceptionField("ex_ranshaoqiguzhang", 47, 2, "燃烧器故障", 2));

    }
}