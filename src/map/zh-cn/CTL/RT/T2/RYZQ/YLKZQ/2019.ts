import { CTL_RT_T2_RYZQ } from "../RYZQ";
import { ExceptionField, OpenCloseField } from "../../../../../../../meta/CTL_RT/meta";
import { ZH_CN } from "../../../../../ZH_CN";
import { CTL_RT_T2_RYZQ_YLKZQ2 as Device } from '../../../../../../../devices/CTL/RT/T2/RYZQ/YLKZQ/BaseDevice2'



export class CTL_RT_T2_RYZQ_YLKZQ_2019 extends CTL_RT_T2_RYZQ{

    constructor(){
        super();
        
        this.addPoint(new OpenCloseField(Device.KEY_POINT_RAN_SHAO_QI_STATUS, 9, 2, "燃烧器负荷增大调节", 1, ZH_CN.coms_open_close));
        this.addPoint(new OpenCloseField("oc_jianxiaodiaojie", 9, 2, "减小调节", 2, ZH_CN.coms_open_close));
        
        this.addPoint(new ExceptionField("ex_ranqiyaligaobaojing", 47, 2, "燃气压力高报警", 0));
        this.addPoint(new ExceptionField("ex_ranqixieloubaojing", 47, 2, "燃气泄漏报警", 1));
        this.addPoint(new ExceptionField("ex_ranshaoqiguzhang", 47, 2, "燃烧器故障", 2));

    }
}