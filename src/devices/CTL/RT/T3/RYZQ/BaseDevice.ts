
import { CTL_RT_RY } from "../../RY";
import { List } from "../../../../../entities/Collections";
import { DeviceFieldForUI } from "../../../../../meta/DeviceFieldForUI";

export abstract class CTL_RT_T3_RYZQ extends CTL_RT_RY {
    protected addFocusFields(list:List<DeviceFieldForUI>){
        let map = this.getMockFields();
        list.push(map.getItem("mo_lengningqiyanwen"));
        list.push(map.getItem("mo_jishuiwendu"));
        list.push(map.getItem("mo_shuiweixinhao"));
        list.push(map.getItem("mo_paiyanwendu"));
        list.push(map.getItem("mo_jienengqiyanwen"));
    }
}