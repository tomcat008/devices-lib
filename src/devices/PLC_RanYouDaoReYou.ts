import { PLC_RanYou } from "./PLC_RanYou";
import { DeviceFieldForUI } from "../meta/DeviceFieldForUI";
import { SdcSoftDevice } from "./SdcSoftDevice";
import { List } from "../entities/Collections";

export = class PLC_RanYouDaoReYou extends PLC_RanYou{
    constructor() {
        super();
        this.BYTE_ARRAY_LENGTH = 245;
    }


    getDeviceFocusFields():DeviceFieldForUI[] {
        
        let map = this.getBaseInfoFields();
        let list = new List<DeviceFieldForUI>();
        list.push(map.getItem(SdcSoftDevice.KEY_POINT_RUN_DAYS));
        list.push(map.getItem(SdcSoftDevice.KEY_POINT_RUN_HOURS));
        return list.toArray();
    }
}