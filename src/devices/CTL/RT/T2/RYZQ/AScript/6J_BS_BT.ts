import { CTL_RT_T2_RYZQ_6JBS } from "./6J_BS"

export class CTL_RT_T2_RYZQ_6JBSBT extends CTL_RT_T2_RYZQ_6JBS{
    //6电极压力变送器内置比调
    
    getPowerInfo():number{
        return this.getDeviceFields().getItem(CTL_RT_T2_RYZQ_6JBSBT.KEY_POINT_RAN_SHAO_QI_KONGZHI).getValue()
    }
}