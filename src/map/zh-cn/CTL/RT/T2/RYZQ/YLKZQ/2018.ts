import { CTL_RT_T2_RYZQ_YLKZQ } from "./BaseMap";
import { ExceptionField } from "../../../../../../../meta/RT/meta";



export = class CTL_RT_T2_RYZQ_YLKZQ_2018 extends CTL_RT_T2_RYZQ_YLKZQ{
    constructor(){
        super();
        this.addPoint(new ExceptionField("ex_ranqiyaligaobaojing", 45, 2, "燃气压力高报警", 15));
        this.addPoint(new ExceptionField("ex_ranqixieloubaojing", 47, 2, "燃气泄漏报警", 0));
        this.addPoint(new ExceptionField("ex_ranshaoqiguzhang", 47, 2, "燃烧器故障", 1));

    }
}