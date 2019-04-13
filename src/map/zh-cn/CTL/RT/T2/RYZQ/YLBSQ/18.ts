import { ExceptionField } from "../../../../../../../meta/RT/meta";
import { CTL_RT_T2_RYZQ_YLBSQ } from "../YLBSQ";



export = class CTL_RT_T2_RYZQ_YLBSQ_18 extends CTL_RT_T2_RYZQ_YLBSQ{
    constructor(){
        super();
        this.warningMsg='';
        this.addPoint(new ExceptionField("ex_ranqiyaligaobaojing", 45, 2, "燃气压力高报警", 15));
        this.addPoint(new ExceptionField("ex_ranqixieloubaojing", 47, 2, "燃气泄漏报警", 0));
        this.addPoint(new ExceptionField("ex_ranshaoqiguzhang", 47, 2, "燃烧器故障", 1));

    }
}