import { CTL_RT } from "../RT";
import { List } from "../../../../entities/Collections";
import { DeviceFieldForUI } from "../../../../meta/DeviceFieldForUI";
import { CTL_RT_X1_Ts } from "../../../../map/zh-cn/CTL/RT/AScript/X1";

export =class CTL_RT_X1_RYZFHTJ extends CTL_RT {
    constructor() {
        super();
        this.BYTE_ARRAY_LENGTH = 111;
    }
    protected getPowerInfo() {
        let map = this.getOpenCloseFields();
        if (map.getItem(CTL_RT.KEY_POINT_RAN_SHAO_QI_KONGZHI).getValue() > 0) {
            if (map.getItem('oc_ranshaoqifuhetiaojie').getValue() > 0)
                return 2;
            return 1;
        }
        else
            return 0;
    }

    protected addFocusFields(list: List<DeviceFieldForUI>) {
        let map = this.getBaseInfoFields();
        let field = map.getItem('ba_yalizhuangtai');

        let map2 = this.getOpenCloseFields();
        let n1 = map2.getItem('oc_fuhetiaojie').getValue()==1?2:0;
        let n2 = map2.getItem('oc_qitingkongzhi').getValue()==1?1:0;
        field.setValueString(CTL_RT_X1_Ts.coms_fhtj_yl_status[n1+n2]);
        
        let map3 = this.getMockFields();
        list.push(map3.getItem('mo_paiyanwendu'));
    }

}