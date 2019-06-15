import { List } from "../../../../../entities/Collections"
import { DeviceFieldForUI } from "../../../../../meta/DeviceFieldForUI"
import { CTL_RT_X1_RY_ZhengQi } from "./RY_ZQ"

//燃油蒸汽电接点压力表
export class CTL_RT_X1_RY_ZhengQi_DJD extends CTL_RT_X1_RY_ZhengQi {

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