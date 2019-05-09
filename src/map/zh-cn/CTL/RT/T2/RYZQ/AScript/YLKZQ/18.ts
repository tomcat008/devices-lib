import { ExceptionField,OpenCloseField,MockField } from "../../../../../../../../meta/RT/meta";
import { ZH_CN } from "../../../../../../ZH_CN";
import { CTL_RT_T2_RYZQ_Ts } from "../../../AScript/RYZQ";



export class CTL_RT_T2_RYZQ_YLKZQ_18 extends CTL_RT_T2_RYZQ_Ts{
    constructor(){
        super();
        // this.warningMsg='';
        this.addPoint(new OpenCloseField("oc_fuhetiaojie", 5, 2, "负荷调节", 7, ZH_CN.coms_open_close));
        this.addPoint(new OpenCloseField("oc_qitingkongzhi", 5, 2, "启停控制", 8, ZH_CN.coms_open_close));

        this.addPoint(new OpenCloseField("oc_ranshaoqifuhe", 9, 2, "燃烧器负荷调节", 1, ZH_CN.coms_open_close));

        this.addPoint(new MockField("mo_lengningqiyanwen", 13, 2, "冷凝器烟温", "℃"));
        this.addPoint(new MockField("mo_jishuiwendu", 15, 2, "给水温度", "℃"));
        this.addPoint(new MockField("mo_jienengqiyanwen", 23, 2, "节能器烟温", "℃"));

        this.addPoint(new ExceptionField("ex_chaoyabaojing", 45, 2, "超压报警", 13));
        this.addPoint(new ExceptionField("ex_ranqiyaligaobaojing", 45, 2, "燃气压力高报警", 15));
        this.addPoint(new ExceptionField("ex_ranqixieloubaojing", 47, 2, "燃气泄漏报警", 0));
        this.addPoint(new ExceptionField("ex_ranshaoqiguzhang", 47, 2, "燃烧器故障", 1));

        

    }
}