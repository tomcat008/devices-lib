import { PLC_RanYou } from "./RanYou";
import { DeviceFieldForUI } from "../../meta/DeviceFieldForUI";
import { SdcSoftDevice } from "../SdcSoftDevice";
import { List } from "../../entities/Collections";

export = class PLC_RanYouZhenKong extends PLC_RanYou {
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
        list.push(map2.getItem("mo_paiyanwendu"));
        list.push(map2.getItem("mo_remeishuiwendu"));

        list.push(map.getItem("ba_shuiweizhuangtai"));
        list.push(map2.getItem("mo_zhenkongyali"));
        return list.toArray();
    }
}