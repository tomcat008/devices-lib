import { List } from "../../../../../../entities/Collections";
import { DeviceFieldForUI } from "../../../../../../meta/DeviceFieldForUI";
import { Map_CTL_RT_T2_RYZQ_4J } from "../../../../../../map/zh-cn/CTL/RT/T2/RYZQ/AScript/4J";
import { CTL_RT_T2_RYZQ_6J } from "./6J";

export class CTL_RT_T2_RYZQ_6JKZ extends CTL_RT_T2_RYZQ_6J{
    protected addFocusFields(list: List<DeviceFieldForUI>) {
        
        let f = this.getBaseInfoFields().getItem(CTL_RT_T2_RYZQ_6JKZ.KEY_POINT_YA_LI_STATUS);
        let map = this.getOpenCloseFields();

        let a = map.getItem('oc_fuhetiaojie').getValue() > 0 ? 2 : 0;
        let b = map.getItem('oc_qitingkongzhi').getValue();

        let c = a | b

        f.setValue(c,Map_CTL_RT_T2_RYZQ_4J.KG_YaLiStatus)
        list.push(f);
        super.addFocusFields(list);

        // list.push(map.getItem("mo_lengningqiyanwen"));
        // list.push(map.getItem("mo_jishuiwendu"));
        // list.push(map.getItem("mo_shuiweixinhao"));
        // list.push(map.getItem("mo_paiyanwendu"));
        // list.push(map.getItem("mo_jienengqiyanwen"));
    }

    getPowerInfo():number{
        let map = this.getOpenCloseFields();
        if(map.getItem(CTL_RT_T2_RYZQ_6JKZ.KEY_POINT_RAN_SHAO_QI_KONGZHI).getValue() > 0){
            return map.getItem('oc_ranshaoqifuhe_zengda').getValue();
        }
        return 0;
    }
}