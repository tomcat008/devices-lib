import { List } from "../../../../../entities/Collections"
import { DeviceFieldForUI } from "../../../../../meta/DeviceFieldForUI"
import { CTL_RT_X1_ZhengQi } from "../AScript/ZQ"

export = class CTL_RT_X1_BKSR_9 extends CTL_RT_X1_ZhengQi {


    protected getPowerInfo() {
        return this.getDeviceFields().getItem(CTL_RT_X1_BKSR_9.KEY_POINT_YIN_FENG_FAN_1).getValue()
    }

    protected addFocusFields(list: List<DeviceFieldForUI>) {
        super.addFocusFields(list)
        let map = this.getBaseInfoFields()
        let f = map.getItem('ba_yalizhuangtai')

        let map2 = this.getOpenCloseFields()
        let a = map2.getItem('oc_dianjiedianyalibiaodizhen').getValue() == 1 ? 2 : 0
        let b = map2.getItem('oc_dianjiedianyalibiaogaozhen').getValue() == 1 ? 1 : 0
        f.setValue(a | b)
        list.push(f)
        let map3 = this.getMockFields()
        list.push(map3.getItem('mo_paiyanwendu'))
    }

}