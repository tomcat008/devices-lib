import { CTL_RT_X1_NoSub_Ts } from "./X1_NoSub";

/**
 * 需要进一步明确类型的X1设备类型
 * 如控制器类型为 CTL_RT_X1_BKSR,在处理时需要调用getSubDeviceType，来确定具体型号进行二次加载解析
 * 如确认是1-9那种模式
 */
export class CTL_RT_X1_Sub_Ts extends CTL_RT_X1_NoSub_Ts {

    getSubDeviceType():string{
        let t = this.getSettingFields().getItem('se_dangqianmoshi').getValue().toString()
        return t
    }
}