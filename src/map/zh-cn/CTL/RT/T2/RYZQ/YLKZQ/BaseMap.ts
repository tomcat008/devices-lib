import { CTL_RT_T2_RYZQ } from "../RYZQ";
import { OpenCloseField } from "../../../../../../../meta/CTL_RT/meta";
import { CTL_RT_T2_RYZQ_YLKZQ as Device } from '../../../../../../../devices/CTL/RT/T2/RYZQ/YLKZQ/BaseDevice'

export class CTL_RT_T2_RYZQ_YLKZQ extends CTL_RT_T2_RYZQ{
    constructor(){
        super();
        
        this.addPoint(new OpenCloseField(Device.KEY_POINT_RAN_SHAO_QI_STATUS, 9, 2, "燃烧器调节", 1, CTL_RT_T2_RYZQ.coms_open_close));
        
    }
}