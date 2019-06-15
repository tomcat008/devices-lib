import { CTL_RT_T2_RYZQ_NoSub_Ts } from "./RYZQ_NoSub";

/**
 * 需要进一步明确类型的T2设备类型
 * 如控制器类型为 CTL_RT_T2,在处理时需要调用getSubDeviceType，来确定具体型号(如211)进行二次加载解析
 * 如确认是1-9那种模式
 */
export class CTL_RT_T2_RYZQ_Sub_Ts extends CTL_RT_T2_RYZQ_NoSub_Ts {
    
    getSubDeviceType():string{
        let map = this.getBaseInfoFields()
        let a = map.getItem('de_shuiweiceliangfangshi').getValue().toString()
        let b = map.getItem('de_ranshaoqikongzhifangshi').getValue().toString()
        let c = map.getItem('de_ranshaoqigongzuofangshi').getValue().toString()
        
        return a+b+c
    }
}