import { List } from "../../../../../entities/Collections";
import { DeviceFieldForUI } from "../../../../../meta/DeviceFieldForUI";
import { CTL_RT_X1_ZhengQi } from "./AScript/ZQ";
import { Map_CTL_RT_X1_ZhengQi } from "../../../../../map/zh-cn/CTL/RT/X1/HNRT/Ascript/ZQ";

export = class CTL_RT_X1_HNRT_5 extends CTL_RT_X1_ZhengQi {

    protected getPowerInfo() {
        let map = this.getOpenCloseFields();
        if (map.getItem(CTL_RT_X1_HNRT_5.KEY_POINT_RAN_SHAO_QI_KONGZHI).getValue() > 0) {
            if (map.getItem('oc_ranshaoqifuhetiaojie').getValue() > 0)
                return 2;
            return 1;
        }
        else
            return 0;
    }

    protected addFocusFields(list: List<DeviceFieldForUI>) {
        super.addFocusFields(list)
        let map = this.getBaseInfoFields();
        let f = map.getItem('ba_yalizhuangtai');

        let map2 = this.getOpenCloseFields();
        let a = map2.getItem('oc_dianjiedianyalibiaodizhen').getValue() == 1 ? 2 : 0;
        let b = map2.getItem('oc_dianjiedianyalibiaogaozhen').getValue() == 1 ? 1 : 0;
        f.setValue(a | b, Map_CTL_RT_X1_ZhengQi.DJD_YaLiStatus)
        list.push(f)
        let map3 = this.getMockFields();
        list.push(map3.getItem('mo_paiyanwendu'));
    }

}