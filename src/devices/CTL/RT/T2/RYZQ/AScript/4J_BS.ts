import { CTL_RT_T2_RYZQ_4J } from "./4J";
import { List } from "../../../../../../entities/Collections";
import { DeviceFieldForUI } from "../../../../../../meta/DeviceFieldForUI";

export class CTL_RT_T2_RYZQ_4JBS extends CTL_RT_T2_RYZQ_4J{
    //4电极压力变送器内置比调
    
    protected addFocusFields(list: List<DeviceFieldForUI>) {
        super.addFocusFields(list)
        let map = this.getMockFields();
        list.push(map.getItem('mo_zhengqiyali'));
        super.addFocusFields(list);
    }

}