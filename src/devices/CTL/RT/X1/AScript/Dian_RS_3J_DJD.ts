import { List } from "../../../../../entities/Collections"
import { DeviceFieldForUI } from "../../../../../meta/DeviceFieldForUI"
import { CTL_RT_X1_RS3JDJD } from "./RS_3J_DJD"

export class CTL_RT_X1_Dian_RS3JDJD extends CTL_RT_X1_RS3JDJD {
        
    protected addFocusFields(list: List<DeviceFieldForUI>) {
        super.addFocusFields(list)

        let map = this.getCountFields()
        let map2 = this.getDeviceFields()

        let field = map.getItem(CTL_RT_X1_Dian_RS3JDJD.KEY_POINT_RAN_SHAO_QI)
        let count = 0
        count += map2.getItem('oc_jiarezu1kongzhi').getValue()
        count += map2.getItem('oc_jiarezu2kongzhi').getValue()
        field.setValue(count)
        list.insert(2,field)
    }

}