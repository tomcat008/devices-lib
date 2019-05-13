import { CTL_RT_T2_RYZQ_4J } from "./4J";
import { List } from "../../../../../../entities/Collections";
import { DeviceFieldForUI } from "../../../../../../meta/DeviceFieldForUI";
import { Map_CTL_RT_T2_RYZQ_4J } from "../../../../../../map/zh-cn/CTL/RT/T2/RYZQ/AScript/4J";

export class CTL_RT_T2_RYZQ_4JKZ extends CTL_RT_T2_RYZQ_4J {
    //4电极压力控制器2端火

    protected addFocusFields(list: List<DeviceFieldForUI>) {
        // this.addPoint(new CountShowField(Map_CTL_RT_T2_RYZQ_4J.KEY_BASE,CTL_RT_T2_RYZQ_Ts.KEY_POINT_YA_LI_STATUS, "压力状态",''));

        // this.addPoint(new OpenCloseField("oc_ranshaoqifuhe_zengda", 9, 2, "燃烧器负荷增大调节", 1, Map_ZH_CN.coms_open_close));

        // this.addPoint(new OpenCloseField("oc_fuhetiaojie", 5, 2, "负荷调节", 7, Map_ZH_CN.coms_open_close));
        // this.addPoint(new OpenCloseField("oc_qitingkongzhi", 5, 2, "启停控制", 8, Map_ZH_CN.coms_open_close));

        let f = this.getBaseInfoFields().getItem(CTL_RT_T2_RYZQ_4JKZ.KEY_POINT_YA_LI_STATUS);
        let map = this.getOpenCloseFields();

        let a = map.getItem('oc_fuhetiaojie').getValue() > 0 ? 2 : 0;
        let b = map.getItem('oc_qitingkongzhi').getValue();

        let c = a | b

        f.setValue(c,Map_CTL_RT_T2_RYZQ_4J.KG_YaLiStatus)
        list.push(map.getItem('mo_zhengqiyali'));
        super.addFocusFields(list);

        // list.push(map.getItem("mo_lengningqiyanwen"));
        // list.push(map.getItem("mo_jishuiwendu"));
        // list.push(map.getItem("mo_shuiweixinhao"));
        // list.push(map.getItem("mo_paiyanwendu"));
        // list.push(map.getItem("mo_jienengqiyanwen"));
    }

    getPowerInfo():number{
        let map = this.getOpenCloseFields();
        if(map.getItem(CTL_RT_T2_RYZQ_4JKZ.KEY_POINT_RAN_SHAO_QI_KONGZHI).getValue() > 0){
            return map.getItem('oc_ranshaoqifuhe_zengda').getValue();
        }
        return 0;
    }
}