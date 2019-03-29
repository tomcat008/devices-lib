import { PLC_Dian } from "./PLC_Dian";
import { DeviceFieldForUI } from "../meta/DeviceFieldForUI";
import { SdcSoftDevice } from "./SdcSoftDevice";
import { List } from "../entities/Collections";

export class PLC_DianReShui extends PLC_Dian{
    constructor() {
        super();
        this.BYTE_ARRAY_LENGTH = 243;
    }


    getDeviceFocusFields():DeviceFieldForUI[] {
        let map = this.getBaseInfoFields();
        let list = new List<DeviceFieldForUI>();
        list.push(map.getItem(SdcSoftDevice.KEY_POINT_RUN_DAYS));
        list.push(map.getItem(SdcSoftDevice.KEY_POINT_RUN_HOURS));
        let map2 = this.getMockFields();
        list.push(map2.getItem("mo_qidongjiarezushu"));
        list.push(map2.getItem("mo_chushuiwendu"));
        list.push(map2.getItem("mo_huishuiwendu"));
        list.push(map.getItem("ba_shuiweizhuangtai"));
        return list.toArray();
    }
}