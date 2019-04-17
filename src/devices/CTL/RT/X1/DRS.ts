import { CTL_RT } from "../RT";
import { List } from "../../../../entities/Collections";
import { DeviceFieldForUI } from "../../../../meta/DeviceFieldForUI";
import { CTL_RT_X1_Ts } from "../../../../map/zh-cn/CTL/RT/AScript/X1";

export =class CTL_RT_X1_DRS extends CTL_RT {
    constructor() {
        super();
        this.BYTE_ARRAY_LENGTH = 111;
    }
    protected getPowerInfo() {
        return 0;
    }

    protected addFocusFields(list: List<DeviceFieldForUI>) {
        let map = this.getBaseInfoFields();
        let field = map.getItem('ba_shuiweioryalizhuangtai');

        let map2 = this.getOpenCloseFields();
        let n1 = map2.getItem('oc_bushuibengkongzhixinhao').getValue() == 1 ? 4 : 0;
        let n2 = map2.getItem('oc_didianji/dianjiedianyalibiaodizhen').getValue() == 1 ? 2 : 0;
        let n3 = map2.getItem('oc_gaodianji/dianjiedianyalibiaogaozhen').getValue() == 1 ? 1 : 0;
        field.setValueString(CTL_RT_X1_Ts.coms_lv_yl_sw_status[n1 + n2 + n3]);


        field = map.getItem(CTL_RT_X1_DRS.KEY_POINT_RAN_SHAO_QI);
        let count = 0;
        count += map2.getItem('oc_jiarezu1kongzhi').getValue()
        count += map2.getItem('oc_jiarezu2kongzhi').getValue();
        field.setValue(count);
        list.push(field);
        list.push(map2.getItem("mo_chushuiwendu"));


    }

}