import { CTL_RT_T2_RYZQ_4JBSBT } from "./4J_BS_BT";
import { List } from "../../../../../../entities/Collections";
import { DeviceFieldForUI } from "../../../../../../meta/DeviceFieldForUI";

export class CTL_RT_T2_RYZQ_4MBSBT extends CTL_RT_T2_RYZQ_4JBSBT{
    //4-20mA压力变送器内置比调
    protected addFocusFields(list: List<DeviceFieldForUI>) {
        super.addFocusFields(list);
        let map = this.getMockFields();
        list.push(map.getItem('mo_shuiweixinhao'));
    }
}