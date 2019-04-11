import { CTL_RT_T2_RY } from "../../RY";
import { DeviceFieldForUI } from "../../../../../../meta/DeviceFieldForUI";
import { List } from "../../../../../../entities/Collections";

export class CTL_RT_T2_RYZQ_YLKZQ2 extends CTL_RT_T2_RY {
    static readonly KEY_POINT_RAN_SHAO_QI_STATUS = "oc_ranshaoqifuhediaojie/zengdadiaojie";
    
    protected getPowerInfo() {
        let map = this.getOpenCloseFields();
        let i = map.getItem(CTL_RT_T2_RY.KEY_POINT_RAN_SHAO_QI_KONGZHI).getValue();
        if (i > 0) {
            return map.getItem(CTL_RT_T2_RYZQ_YLKZQ2.KEY_POINT_RAN_SHAO_QI_STATUS).getValue() > 0 ? 1 : 0;
        }
        return 0;
    }

    protected addFocusFields(list:List<DeviceFieldForUI>){
        let map = this.getMockFields();
        list.push(map.getItem("mo_lengningqiyanwen"));
        list.push(map.getItem("mo_jishuiwendu"));
        list.push(map.getItem("mo_shuiweixinhao"));
        list.push(map.getItem("mo_paiyanwendu"));
        list.push(map.getItem("mo_jienengqiyanwen"));
    }
    
}