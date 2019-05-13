import { CTL_RT } from "../../RT";

export class CTL_RT_T2_RYZQ_Ts extends CTL_RT {
    static readonly KEY_POINT_SHUI_WEI_STATUS='ba_shuiwei_status'
    static readonly KEY_POINT_YA_LI_STATUS='ba_yali_status'
    constructor(){
        super();
        this.BYTE_ARRAY_LENGTH=163;
    }
    // protected addFocusFields(list:List<DeviceFieldForUI>){
    //     let map = this.getMockFields();
    //     list.push(map.getItem("mo_lengningqiyanwen"));
    //     list.push(map.getItem("mo_jishuiwendu"));
    //     list.push(map.getItem("mo_shuiweixinhao"));
    //     list.push(map.getItem("mo_paiyanwendu"));
    //     list.push(map.getItem("mo_jienengqiyanwen"));
    // }
    
    
    // protected getPowerInfo() {
    //     return 0;
    // }

    getSubDeviceType():string{
        let map = this.getBaseInfoFields();
        let a = map.getItem('de_shuiweiceliangfangshi').getValue().toString();
        let b = map.getItem('de_ranshaoqikongzhifangshi').getValue().toString();
        let c = map.getItem('de_ranshaoqigongzuofangshi').getValue().toString();
        
        return a+b+c;
    }
}