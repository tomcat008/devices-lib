import { List } from "../../../../../../entities/Collections"
import { DeviceFieldForUI } from "../../../../../../meta/DeviceFieldForUI"
import { CTL_RT_T2_RYZQ_6J } from "./6J"

export class CTL_RT_T2_RYZQ_6JKZ extends CTL_RT_T2_RYZQ_6J {
    static readonly KEY_POINT_YA_LI_STATUS = 'ba_yali_status'
    protected addFocusFields(list: List<DeviceFieldForUI>) {
        super.addFocusFields(list)
        let f = this.getBaseInfoFields().getItem(CTL_RT_T2_RYZQ_6JKZ.KEY_POINT_YA_LI_STATUS)
        let map = this.getOpenCloseFields()

        let a = map.getItem('oc_fuhetiaojie').getValue() > 0 ? 2 : 0
        let b = map.getItem('oc_qitingkongzhi').getValue()

        let c = a | b

        f.setValue(c)
        list.push(f)

    }

    getPowerInfo(): number {
        let map = this.getDeviceFields()
        if (map.getItem(CTL_RT_T2_RYZQ_6JKZ.KEY_POINT_RAN_SHAO_QI_KONGZHI).getValue() > 0) {
            return this.getOpenCloseFields().getItem('oc_ranshaoqifuhe_zengda').getValue() ? 2 : 1
        }
        return 0
    }
}