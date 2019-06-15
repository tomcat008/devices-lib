import { CTL_RT } from "../RT"

/**
 * 明确类型的X1设备的基类
 * 如 CTL_RT_X1_BKSR_1,这种类型设备在处理上无需进行二次解析来明确具体类型
 */
export class CTL_RT_X1_NoSub_Ts extends CTL_RT {
    constructor(){
        super()
        this.BYTE_ARRAY_LENGTH=111
    }

}