import { CTL_RT_T2_RYZQ_4JBS } from "./4J_BS"


export class CTL_RT_T2_RYZQ_4JBSBT extends CTL_RT_T2_RYZQ_4JBS{
    //4电极压力变送器内置比调
    getPowerInfo():number{
        return this.getDeviceFields().getItem(CTL_RT_T2_RYZQ_4JBSBT.KEY_POINT_RAN_SHAO_QI_KONGZHI).getValue()
    }
}