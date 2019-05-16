import { CTL_RT_T2_RYZQ_4MBS } from "./4M_BS";

export class CTL_RT_T2_RYZQ_4MBSBT extends CTL_RT_T2_RYZQ_4MBS{
    //4-20mA压力变送器内置比调

    getPowerInfo():number{
        return this.getDeviceFields().getItem(CTL_RT_T2_RYZQ_4MBSBT.KEY_POINT_RAN_SHAO_QI_KONGZHI).getValue();
    }
    
}