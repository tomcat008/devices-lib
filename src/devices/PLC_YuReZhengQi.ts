import { PLC_YuRe } from "./PLC_YuRe";
import { DeviceFieldForUI } from "../meta/DeviceFieldForUI";
import { SdcSoftDevice } from "./SdcSoftDevice";
import { List } from "../entities/Collections";

export = class PLC_YuReZhengQi extends PLC_YuRe {
    constructor() {
        super();
        this.BYTE_ARRAY_LENGTH = 490;
    }


    getDeviceFocusFields(): DeviceFieldForUI[] {

        let map = this.getBaseInfoFields();
        let list = new List<DeviceFieldForUI>();
        list.push(map.getItem(SdcSoftDevice.KEY_POINT_RUN_DAYS));
        list.push(map.getItem(SdcSoftDevice.KEY_POINT_RUN_HOURS));

        list.push(map.getItem("ba_shuiweizhuangtai"));

        let map2 = this.getMockFields();

        if (map.containsKey('ba_guoluyalizhuangtai')) {
            list.push(map.getItem('ba_guoluyalizhuangtai'));
        }
        else {
            list.push(map2.getItem('mo_zhengqiyali'));
        }

        return list.toArray();
    }
}