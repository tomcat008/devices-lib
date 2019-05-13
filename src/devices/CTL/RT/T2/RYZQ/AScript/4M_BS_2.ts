import { CTL_RT_T2_RYZQ_4JBS2 } from "./4J_BS_2";
import { List } from "../../../../../../entities/Collections";
import { DeviceFieldForUI } from "../../../../../../meta/DeviceFieldForUI";

export class CTL_RT_T2_RYZQ_4MBS2 extends CTL_RT_T2_RYZQ_4JBS2{
    //4-20mA压力变送器2段火
   
    protected addFocusFields(list: List<DeviceFieldForUI>) {
        super.addFocusFields(list);
        let map = this.getMockFields();
        list.push(map.getItem('mo_shuiweixinhao'));
        // list.push(map.getItem("mo_lengningqiyanwen"));
        // list.push(map.getItem("mo_jishuiwendu"));
        // list.push(map.getItem("mo_shuiweixinhao"));
        // list.push(map.getItem("mo_paiyanwendu"));
        // list.push(map.getItem("mo_jienengqiyanwen"));
    }
}