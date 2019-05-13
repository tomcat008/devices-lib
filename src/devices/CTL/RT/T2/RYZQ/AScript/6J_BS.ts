import { List } from "../../../../../../entities/Collections";
import { DeviceFieldForUI } from "../../../../../../meta/DeviceFieldForUI";
import { CTL_RT_T2_RYZQ_6J } from "./6J";

export class CTL_RT_T2_RYZQ_6JBS extends CTL_RT_T2_RYZQ_6J{
    protected addFocusFields(list: List<DeviceFieldForUI>) {
        let map = this.getMockFields();
        list.push(map.getItem('mo_zhengqiyali'));
        super.addFocusFields(list);

        // list.push(map.getItem("mo_lengningqiyanwen"));
        // list.push(map.getItem("mo_jishuiwendu"));
        // list.push(map.getItem("mo_shuiweixinhao"));
        // list.push(map.getItem("mo_paiyanwendu"));
        // list.push(map.getItem("mo_jienengqiyanwen"));
    }
}