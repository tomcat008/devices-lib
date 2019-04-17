import { CTL_RT } from "../../RT";
import { List } from "../../../../../entities/Collections";
import { DeviceFieldForUI } from "../../../../../meta/DeviceFieldForUI";

export class CTL_RT_T2_RYZQ_Ts extends CTL_RT {
    
    protected addFocusFields(list:List<DeviceFieldForUI>){
        let map = this.getMockFields();
        list.push(map.getItem("mo_lengningqiyanwen"));
        list.push(map.getItem("mo_jishuiwendu"));
        list.push(map.getItem("mo_shuiweixinhao"));
        list.push(map.getItem("mo_paiyanwendu"));
        list.push(map.getItem("mo_jienengqiyanwen"));
    }
    
    
    protected getPowerInfo() {
        return 0;
    }
}