import { CTL_RT_T2_RYZQ_Ts } from "../../AScript/RYZQ";
import { DeviceFieldForUI } from "../../../../../../meta/DeviceFieldForUI";
import { List } from "../../../../../../entities/Collections";
import { Map_CTL_RT_T2_RYZQ_4J } from "../../../../../../map/zh-cn/CTL/RT/T2/RYZQ/AScript/4J";

export class CTL_RT_T2_RYZQ_4J extends CTL_RT_T2_RYZQ_Ts {
    //4电极
    protected addFocusFields(list: List<DeviceFieldForUI>) {
        let f = this.getBaseInfoFields().getItem(CTL_RT_T2_RYZQ_4J.KEY_POINT_SHUI_WEI_STATUS)
        let map = this.getOpenCloseFields();

        let a = map.getItem('oc_queshuidianji').getValue()
        let b = map.getItem('oc_dishuiweidianji').getValue()
        let c = map.getItem('oc_gaoshuiweidianji').getValue()
        let d = map.getItem('oc_gaoshuiweibaojingdianji').getValue()

        let x = a | b | c | d
        f.setValue(x,Map_CTL_RT_T2_RYZQ_4J.ShuiWeiStatus);

        list.push(f);

        // list.push(map.getItem("mo_lengningqiyanwen"));
        // list.push(map.getItem("mo_jishuiwendu"));
        // list.push(map.getItem("mo_shuiweixinhao"));
        // list.push(map.getItem("mo_paiyanwendu"));
        // list.push(map.getItem("mo_jienengqiyanwen"));
    }
}