import { List } from "../../../../../../entities/Collections";
import { DeviceFieldForUI } from "../../../../../../meta/DeviceFieldForUI";
import { CTL_RT_T2_RYZQ_4M } from "./4M";
import { Map_CTL_RT_T2_RYZQ_4JKZ } from "../../../../../../map/zh-cn/CTL/RT/T2/RYZQ/AScript/4J_KZ";

export class CTL_RT_T2_RYZQ_4MKZ extends CTL_RT_T2_RYZQ_4M{
    //4-20mA压力控制器2段火
    
    protected addFocusFields(list: List<DeviceFieldForUI>) {
        super.addFocusFields(list);
        let f = this.getBaseInfoFields().getItem(CTL_RT_T2_RYZQ_4MKZ.KEY_POINT_YA_LI_STATUS);
        let map = this.getOpenCloseFields();

        let a = map.getItem('oc_fuhetiaojie').getValue() > 0 ? 2 : 0;
        let b = map.getItem('oc_qitingkongzhi').getValue();

        let c = a | b

        f.setValue(c,Map_CTL_RT_T2_RYZQ_4JKZ.KZQ_YaLiStatus)
        list.push(f);
    }
    getPowerInfo():number{
        let map = this.getDeviceFields();
        if(map.getItem(CTL_RT_T2_RYZQ_4MKZ.KEY_POINT_RAN_SHAO_QI_KONGZHI).getValue() > 0){
            return map.getItem('oc_ranshaoqifuhe_zengda').getValue();
        }
        return 0;
    }
}