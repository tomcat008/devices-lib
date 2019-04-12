import { OpenCloseField } from "../../../../../../../meta/RT/meta";
import { CTL_RT_T2_RYZQ_YLKZQ as Device } from '../../../../../../../devices/CTL/RT/T2/RYZQ/YLKZQ/BaseDevice'
import { CTL_RT_T2_RYZQ_Ts } from "../../RYZQ_Ts";

export class CTL_RT_T2_RYZQ_YLKZQ extends CTL_RT_T2_RYZQ_Ts{
    constructor(){
        super();
        
        this.addPoint(new OpenCloseField(Device.KEY_POINT_RAN_SHAO_QI_STATUS, 9, 2, "燃烧器调节", 1, CTL_RT_T2_RYZQ_YLKZQ.coms_open_close));
        
    }
}