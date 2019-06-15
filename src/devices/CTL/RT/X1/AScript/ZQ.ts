import { List } from "../../../../../entities/Collections"
import { DeviceFieldForUI } from "../../../../../meta/DeviceFieldForUI"
import { CTL_RT_X1_NoSub_Ts } from "../../AScript/X1_NoSub"

export class CTL_RT_X1_ZhengQi extends CTL_RT_X1_NoSub_Ts {
    
    protected addFocusFields(list: List<DeviceFieldForUI>) {
        super.addFocusFields(list)
        let map = this.getBaseInfoFields()
        let f = map.getItem('ba_shuiweizhuangtai')
        let values = f.getValueMap()
        if (values) {
            let map2 = this.getOpenCloseFields()

            let a = map2.getItem('oc_jixiandishuiweidianji').getValue()
            let b = map2.getItem('oc_didianji').getValue()
            let c = map2.getItem('oc_gaodianji').getValue()
            let d = map2.getItem('oc_gaobaojingdianji').getValue()

            let v = (1 << 3) | (a + b + c + d)
            f.setValueString(values.getItem(v))
            list.push(f)
        }
    }

}