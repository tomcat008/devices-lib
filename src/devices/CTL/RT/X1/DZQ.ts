import { CTL_RT } from "../RT";
import { List } from "../../../../entities/Collections";
import { DeviceFieldForUI } from "../../../../meta/DeviceFieldForUI";

export =class CTL_RT_X1_DZQ extends CTL_RT {
    constructor() {
        super();
        this.BYTE_ARRAY_LENGTH = 111;
    }
    protected getPowerInfo() {
        return 0;
    }

    protected addFocusFields(list: List<DeviceFieldForUI>) {
        let map = this.getBaseInfoFields();
        let field = map.getItem(CTL_RT_X1_DZQ.KEY_POINT_RAN_SHAO_QI);
        let count = 0;
        let map2 = this.getOpenCloseFields();
        count += map2.getItem('oc_jiarezu1kongzhi').getValue()
        count += map2.getItem('oc_jiarezu2kongzhi').getValue();
        field.setValue(count);
        list.push(field);
    }

}