import { CTL_RT_T2_RYZQ_NoSub_Ts } from "../../AScript/RYZQ_NoSub"
import { DeviceFieldForUI } from "../../../../../../meta/DeviceFieldForUI"
import { List } from "../../../../../../entities/Collections"

export class CTL_RT_T2_RYZQ_4J extends CTL_RT_T2_RYZQ_NoSub_Ts {
    static readonly KEY_POINT_SHUI_WEI_STATUS = 'ba_shuiwei_status'
    //4电极
    protected addFocusFields(list: List<DeviceFieldForUI>) {
        let f = this.getBaseInfoFields().getItem(CTL_RT_T2_RYZQ_4J.KEY_POINT_SHUI_WEI_STATUS)
        let values = f.getValueMap()
        //console.log(values)
        if (values) {
            let map = this.getOpenCloseFields()

            let a = map.getItem('oc_queshuidianji').getValue()
            let b = map.getItem('oc_dishuiweidianji').getValue()
            let c = map.getItem('oc_gaoshuiweidianji').getValue()
            let d = map.getItem('oc_gaoshuiweibaojingdianji').getValue()

            f.setValueString(values.getItem(a+b+c+d))

            list.push(f)
        }
    }
}