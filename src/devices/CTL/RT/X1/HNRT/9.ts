import { List } from "../../../../../entities/Collections";
import { DeviceFieldForUI } from "../../../../../meta/DeviceFieldForUI";
import { CTL_RT_X1_Ts } from "../../AScript/X1";
import { Map_CTL_RT_X1_HNRT_RYRS_9 } from "../../../../../map/zh-cn/CTL/RT/X1/HNRT/Ascript/9";

export = class CTL_RT_X1_HNRT_9 extends CTL_RT_X1_Ts {

    protected getPowerInfo() {
        let map = this.getDeviceFields();
        if (map.getItem(CTL_RT_X1_HNRT_9.KEY_POINT_RAN_SHAO_QI_KONGZHI).getValue() > 0) {
            if (this.getOpenCloseFields().getItem('oc_ranshaoqifuhetiaojie').getValue() > 0)
                return 2;
            return 1;
        }
        else
            return 0;
    }

    protected addFocusFields(list: List<DeviceFieldForUI>) {
        super.addFocusFields(list)
        let map = this.getBaseInfoFields()
        let f = map.getItem('ba_shuiweizhuangtai')

        let map2 = this.getOpenCloseFields()

        let a = map2.getItem('oc_jixiandishuiweidianji').getValue();
        f.setValue(a, Map_CTL_RT_X1_HNRT_RYRS_9.ShuiWeiStatus_1)
        list.push(f)

        map = this.getMockFields();
        list.push(map.getItem('mo_chushuiwendu'));
    }

}