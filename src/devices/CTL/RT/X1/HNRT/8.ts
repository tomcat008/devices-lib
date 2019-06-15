import { List } from "../../../../../entities/Collections"
import { DeviceFieldForUI } from "../../../../../meta/DeviceFieldForUI"
import { CTL_RT_X1_NoSub_Ts } from "../../AScript/X1_NoSub"
import { SdcSoftDevice } from "../../../../SdcSoftDevice";

export = class CTL_RT_X1_HNRT_8 extends CTL_RT_X1_NoSub_Ts {


    protected getPowerInfo() {
        return this.getDeviceFields().getItem(CTL_RT_X1_HNRT_8.KEY_POINT_RAN_SHAO_QI_KONGZHI).getValue()
    }

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
            f.setValueString(values.getItem(1 << 2 | (a + b + c)))

            list.push(f)
        }

        map = this.getMockFields()
        list.push(map.getItem('mo_chushuiwendu'))
    }
}