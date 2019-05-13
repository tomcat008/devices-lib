import { CTL_RT_T2_RYZQ_4JKZ } from "./4J_KZ";
import { List } from "../../../../../../entities/Collections";
import { DeviceFieldForUI } from "../../../../../../meta/DeviceFieldForUI";

export class CTL_RT_T2_RYZQ_4MKZ extends CTL_RT_T2_RYZQ_4JKZ{
    //4-20mA压力控制器2段火
    
    protected addFocusFields(list: List<DeviceFieldForUI>) {
        super.addFocusFields(list);
        let map = this.getMockFields();
        list.push(map.getItem('mo_shuiweixinhao'));
    }
}