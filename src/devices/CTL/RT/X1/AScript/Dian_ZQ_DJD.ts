import { CTL_RT_X1_ZhengQi } from "./ZQ"
import { List } from "../../../../../entities/Collections"
import { DeviceFieldForUI } from "../../../../../meta/DeviceFieldForUI"

export class CTL_RT_X1_Dian_ZhengQi_DJD extends CTL_RT_X1_ZhengQi {
    
    protected getPowerInfo() {
        return 0
    }

    protected addFocusFields(list: List<DeviceFieldForUI>) {
        super.addFocusFields(list)

        let map = this.getCountFields()
        let f = map.getItem(CTL_RT_X1_Dian_ZhengQi_DJD.KEY_POINT_RAN_SHAO_QI)
        let count = 0
        let map2 = this.getDeviceFields()
        count += map2.getItem('oc_jiarezu1kongzhi').getValue()
        count += map2.getItem('oc_jiarezu2kongzhi').getValue()
        f.setValue(count)
        list.insert(2,f)

        map = this.getBaseInfoFields()
        f = map.getItem('ba_yalizhuangtai')
        map2 = this.getOpenCloseFields()
        let a = map2.getItem('oc_dianjiedianyalibiaodizhen').getValue() == 1 ? 2 : 0
        let b = map2.getItem('oc_dianjiedianyalibiaogaozhen').getValue() == 1 ? 1 : 0
        f.setValue(a | b)
        list.push(f)

    }

}