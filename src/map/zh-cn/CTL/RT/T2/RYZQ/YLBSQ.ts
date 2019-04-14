import { ZH_CN } from "../../../../ZH_CN";
import { OpenCloseField,MockField,ExceptionField } from "../../../../../../meta/RT/meta";
import { CTL_RT_T2_RYZQ_YLBSQ_Ts as Device } from '../../../../../../devices/CTL/RT/T2/RYZQ/YLBSQ/AScropt/YLBSQ'
import { CTL_RT_T2_RYZQ_Ts } from "../AScript/RYZQ";

export class CTL_RT_T2_RYZQ_YLBSQ extends CTL_RT_T2_RYZQ_Ts{
    constructor(){
        super();
        this.addPoint(new OpenCloseField(Device.KEY_POINT_RAN_SHAO_QI_STATUS, 9, 2, "燃烧器负荷增大调节", 1, ZH_CN.coms_open_close));
        this.addPoint(new OpenCloseField("oc_jianxiaodiaojie", 9, 2, "减小调节", 2, ZH_CN.coms_open_close));
        this.addPoint(new MockField("mo_zhengqiyali", 17, 2, "蒸汽压力", "Mpa", 100));
        this.addPoint(new ExceptionField("ex_yalibiansongqiduanlu1", 45, 2, "压力变送器断路", 0));
        this.addPoint(new ExceptionField("ex_yalibiansongqiduanlu", 45, 2, "压力变送器短路", 1));
        
    }
}