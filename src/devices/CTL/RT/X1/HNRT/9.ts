import { List } from "../../../../../entities/Collections";
import { DeviceFieldForUI } from "../../../../../meta/DeviceFieldForUI";
import { CTL_RT_X1_Ts } from "../../AScript/X1";

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
        let values = f.getValueMap()
        if (values) {
            let map2 = this.getOpenCloseFields()

            let a = map2.getItem('oc_jixiandishuiweidianji').getValue();
            f.setValueString(values.getItem(a));
            list.push(f)
        }
        map = this.getMockFields();
        list.push(map.getItem('mo_chushuiwendu'));
    }

}