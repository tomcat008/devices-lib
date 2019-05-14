import { List } from "../../../../../entities/Collections";
import { DeviceFieldForUI } from "../../../../../meta/DeviceFieldForUI";
import { CTL_RT_X1_ZhengQi } from "./AScript/ZQ";

export = class CTL_RT_X1_HNRT_7 extends CTL_RT_X1_ZhengQi {
    
    protected getPowerInfo() {
        return 0;
    }

    protected addFocusFields(list: List<DeviceFieldForUI>) {
        super.addFocusFields(list)

        let map = this.getBaseInfoFields();
        let field = map.getItem(CTL_RT_X1_HNRT_7.KEY_POINT_RAN_SHAO_QI);
        let count = 0;
        let map2 = this.getOpenCloseFields();
        count += map2.getItem('oc_jiarezu1kongzhi').getValue()
        count += map2.getItem('oc_jiarezu2kongzhi').getValue();
        field.setValue(count);
        list.insert(2,field);
    }

}