import { CTL_RT } from "../RT";
import { List } from "../../../../entities/Collections";
import { DeviceFieldForUI } from "../../../../meta/DeviceFieldForUI";

export =class CTL_RT_X1_RYCYRS2 extends CTL_RT {
    constructor() {
        super();
        this.BYTE_ARRAY_LENGTH = 111;
    }
    protected getPowerInfo() {
        let map = this.getOpenCloseFields();
        if (map.getItem(CTL_RT.KEY_POINT_RAN_SHAO_QI_KONGZHI).getValue() > 0) {
            if (map.getItem('oc_ranshaoqifuhetiaojie').getValue() > 0)
                return 2;
            return 1;
        }
        else
            return 0;
    }

    protected addFocusFields(list: List<DeviceFieldForUI>) {
        let map = this.getMockFields();
        list.push(map.getItem('mo_chushuiwendu'));
    }

}