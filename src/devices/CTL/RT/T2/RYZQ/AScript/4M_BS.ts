import { List } from "../../../../../../entities/Collections";
import { DeviceFieldForUI } from "../../../../../../meta/DeviceFieldForUI";
import { CTL_RT_T2_RYZQ_4M } from "./4M";

export class CTL_RT_T2_RYZQ_4MBS extends CTL_RT_T2_RYZQ_4M{
    //4-20mA压力变送器
       
    protected addFocusFields(list: List<DeviceFieldForUI>) {
        super.addFocusFields(list);
        let map = this.getMockFields();
        list.push(map.getItem('mo_zhengqiyali'));
    }    
}