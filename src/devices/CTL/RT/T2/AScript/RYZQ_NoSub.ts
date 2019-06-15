import { CTL_RT } from "../../RT"

/**
 * 明确类型的T2设备的基类
 * 如 CTL_RT_T2_211,这种类型设备在处理上无需进行二次解析来明确具体类型
 */
export class CTL_RT_T2_RYZQ_NoSub_Ts extends CTL_RT {
    
    constructor(){
        super()
        this.BYTE_ARRAY_LENGTH=163
    }
    // protected addFocusFields(list:List<DeviceFieldForUI>){
    //     let map = this.getMockFields()
    //     list.push(map.getItem("mo_lengningqiyanwen"))
    //     list.push(map.getItem("mo_jishuiwendu"))
    //     list.push(map.getItem("mo_shuiweixinhao"))
    //     list.push(map.getItem("mo_paiyanwendu"))
    //     list.push(map.getItem("mo_jienengqiyanwen"))
    // }
    
    
    // protected getPowerInfo() {
    //     return 0
    // }
}