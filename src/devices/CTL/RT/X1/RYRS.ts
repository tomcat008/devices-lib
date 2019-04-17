import { CTL_RT } from "../RT";
import { List } from "../../../../entities/Collections";
import { DeviceFieldForUI } from "../../../../meta/DeviceFieldForUI";

export =class CTL_RT_X1_RYRS extends CTL_RT {
    constructor() {
        super();
        this.BYTE_ARRAY_LENGTH = 111;
    }
    protected getPowerInfo() {
        return this.getOpenCloseFields().getItem(CTL_RT.KEY_POINT_RAN_SHAO_QI_KONGZHI).getValue();
    }

    protected addFocusFields(list: List<DeviceFieldForUI>) {
        let map = this.getMockFields();
        list.push(map.getItem('mo_chushuiwendu'));
    }

}