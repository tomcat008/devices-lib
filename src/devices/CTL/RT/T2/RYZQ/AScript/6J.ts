import { CTL_RT_T2_RYZQ_Ts } from "../../AScript/RYZQ"
import { DeviceFieldForUI } from "../../../../../../meta/DeviceFieldForUI"
import { List } from "../../../../../../entities/Collections"

export class CTL_RT_T2_RYZQ_6J extends CTL_RT_T2_RYZQ_Ts {
    static readonly KEY_POINT_SHUI_WEI_STATUS='ba_shuiwei_status'
    //6电极
    protected addFocusFields(list: List<DeviceFieldForUI>) {
        let f = this.getBaseInfoFields().getItem(CTL_RT_T2_RYZQ_6J.KEY_POINT_SHUI_WEI_STATUS)
        let map = this.getOpenCloseFields()

        let a = map.getItem('oc_queshuidianji').getValue()
        let a1 = map.getItem('oc_dishuiweibaojingdianji_6dianjiteyou_').getValue()
        let b = map.getItem('oc_dishuiweidianji').getValue()
        let b1 = map.getItem('oc_zhongshuiweidianji_6dianjiteyou_').getValue()
        let c = map.getItem('oc_gaoshuiweidianji').getValue()
        let d = map.getItem('oc_gaoshuiweibaojingdianji').getValue()

        let x = a | a1 | b | b1 | c | d
        f.setValue(x)

        list.push(f)
    }
}