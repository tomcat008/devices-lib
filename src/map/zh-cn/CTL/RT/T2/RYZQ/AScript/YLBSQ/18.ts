import { ExceptionField,OpenCloseField,MockField } from "../../../../../../../../meta/RT/meta";
import { CTL_RT_T2_RYZQ_Ts } from "../../../AScript/RYZQ";
import { ZH_CN } from "../../../../../../ZH_CN";


export class CTL_RT_T2_RYZQ_YLBSQ_18 extends CTL_RT_T2_RYZQ_Ts{
    constructor(){
        super();
        // this.warningMsg='';
        this.addPoint(new OpenCloseField("oc_ranshaoqifuhe_zengda", 9, 2, "燃烧器负荷增大调节", 1, ZH_CN.coms_open_close));
        this.addPoint(new OpenCloseField("oc_ranshaoqifuhe_jianxiao", 9, 2, "燃烧器负荷减小调节", 2, ZH_CN.coms_open_close));

        this.addPoint(new MockField("mo_lengningqiyanwen", 13, 2, "冷凝器烟温", "℃"));
        this.addPoint(new MockField("mo_jishuiwendu", 15, 2, "给水温度", "℃"));
        this.addPoint(new MockField("mo_zhengqiyali", 17, 2, "蒸汽压力", "MPa",100));
        this.addPoint(new MockField("mo_jienengqiyanwen", 23, 2, "节能器烟温", "℃"));

        this.addPoint(new ExceptionField("ex_yalibiansongqiduanlu", 45, 2, "压力变送器断路", 0));
        this.addPoint(new ExceptionField("ex_yalibiansongqiduanlu1", 45, 2, "压力变送器短路", 1));
        this.addPoint(new ExceptionField("ex_chaoyabaojing", 45, 2, "超压报警", 2));

        this.addPoint(new ExceptionField("ex_ranqiyaligaobaojing", 45, 2, "燃气压力高报警", 15));
        this.addPoint(new ExceptionField("ex_ranqixieloubaojing", 47, 2, "燃气泄漏报警", 0));
        this.addPoint(new ExceptionField("ex_ranshaoqiguzhang", 47, 2, "燃烧器故障", 1));

    }
}