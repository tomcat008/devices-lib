import { PLC_RanYou } from "./PLC_RanYou";
import { DeviceFieldForUI } from "../meta/DeviceFieldForUI";
import { SdcSoftDevice } from "./SdcSoftDevice";
import { List } from "../entities/Collections";

export = class PLC_RanYouZhengQi extends PLC_RanYou {
    constructor() {
        super();
        this.BYTE_ARRAY_LENGTH = 490;
    }


    getDeviceFocusFields(): DeviceFieldForUI[] {

        let map = this.getBaseInfoFields();
        let list = new List<DeviceFieldForUI>();
        list.push(map.getItem(SdcSoftDevice.KEY_POINT_RUN_DAYS));
        list.push(map.getItem(SdcSoftDevice.KEY_POINT_RUN_HOURS));
        let map2 = this.getMockFields();
        list.push(map.getItem("ba_shuiweizhuangtai"));
        list.push(map2.getItem("mo_zuizhongpaiyanwendu"));
        if (map.containsKey('ba_guoluyalizhuangtai')) {
            list.push(map.getItem('ba_guoluyalizhuangtai'));
        }
        else {
            list.push(map2.getItem('mo_zhengqiyali'));
        }
        return list.toArray();
    }
}