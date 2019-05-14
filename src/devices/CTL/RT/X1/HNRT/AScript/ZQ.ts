import { List } from "../../../../../../entities/Collections";
import { DeviceFieldForUI } from "../../../../../../meta/DeviceFieldForUI";
import { CTL_RT_X1_Ts } from "../../../AScript/X1";
import { Map_CTL_RT_X1_ZhengQi } from "../../../../../../map/zh-cn/CTL/RT/X1/HNRT/Ascript/ZQ";

export class CTL_RT_X1_ZhengQi extends CTL_RT_X1_Ts {

    protected addFocusFields(list: List<DeviceFieldForUI>) {
        super.addFocusFields(list)
        let map = this.getBaseInfoFields()
        let f = map.getItem('ba_shuiweizhuangtai')

        let map2 = this.getOpenCloseFields()

        let a = map2.getItem('oc_jixiandishuiweidianji').getValue();
        let b = map2.getItem('oc_didianji').getValue()
        let c = map2.getItem('oc_gaodianji').getValue();
        let d = map2.getItem('oc_gaobaojingdianji').getValue();

        f.setValue(a + b + c + d, Map_CTL_RT_X1_ZhengQi.ShuiWeiStatus_4)
        list.push(f);
    }

}