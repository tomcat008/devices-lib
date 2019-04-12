import { CTL_RT_RY } from "../RY";
import { List } from "../../../../entities/Collections";
import { DeviceFieldForUI } from "../../../../meta/DeviceFieldForUI";

export = class CTL_RT_H1_RYZQ extends CTL_RT_RY {

    static readonly KEY_POINT_RAN_SHAO_QI_STATUS = "oc_ranshaoqifuhediaojie/zengdadiaojie";


    protected addFocusFields(list:List<DeviceFieldForUI>){
        let map = this.getMockFields();
        list.push(map.getItem("mo_zhengqiyali"));
    }

    protected getPowerInfo() {
        let map = this.getOpenCloseFields();
        let i = map.getItem(CTL_RT_RY.KEY_POINT_RAN_SHAO_QI_KONGZHI).getValue();
        if (i > 0) {
            return map.getItem(CTL_RT_H1_RYZQ.KEY_POINT_RAN_SHAO_QI_STATUS).getValue() > 0 ? 1 : 0;
        }
        return 0;
    }
}