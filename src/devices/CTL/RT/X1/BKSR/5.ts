import { CTL_RT_X1_RS3JDJD } from "../AScript/RS_3J_DJD"

export = class CTL_RT_X1_BKSR_5 extends CTL_RT_X1_RS3JDJD {
   
    protected getPowerInfo() {
        return this.getDeviceFields().getItem(CTL_RT_X1_BKSR_5.KEY_POINT_YIN_FENG_FAN_1).getValue()
    }
}