import { PLC_Dian } from "./Dian";
import { DeviceFieldForUI } from "../../meta/DeviceFieldForUI";
import { SdcSoftDevice } from "../SdcSoftDevice";
import { List } from "../../entities/Collections";

export = class PLC_DianZhengQi extends PLC_Dian{
    constructor() {
        super();
        this.BYTE_ARRAY_LENGTH = 245;
    }


    getDeviceFocusFields():DeviceFieldForUI[] {
        
        let map = this.getBaseInfoFields();
        let list = new List<DeviceFieldForUI>();
        list.push(map.getItem(SdcSoftDevice.KEY_POINT_RUN_DAYS));
        list.push(map.getItem(SdcSoftDevice.KEY_POINT_RUN_HOURS));
        let map2 = this.getMockFields();
        list.push(map2.getItem("mo_qidongjiarezushu"));
        list.push(map2.getItem("ba_shuiweizhuangtai"));
        if (map.containsKey('ba_guoluyalizhuangtai')) {
            list.push(map.getItem('ba_guoluyalizhuangtai'));
        }
        else {
            list.push(map2.getItem('mo_zhengqiyali'));
        }
        return list.toArray();
    }
}