import { CTL_RT_T2_RYZQ_Ts } from "../../AScript/RYZQ";
import { DeviceFieldForUI } from "../../../../../../meta/DeviceFieldForUI";
import { List } from "../../../../../../entities/Collections";

export class CTL_RT_T2_RYZQ_4M extends CTL_RT_T2_RYZQ_Ts {
    //4-20MA
    protected addFocusFields(list: List<DeviceFieldForUI>) {
        let map = this.getMockFields();
        list.push(map.getItem('mo_shuiweixinhao'));
    }
}