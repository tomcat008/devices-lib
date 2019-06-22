import { PLC } from './BaseDevice'
import { DeviceFieldForUI } from '../../meta/DeviceFieldForUI'
import { SdcSoftDevice } from '../SdcSoftDevice'
import { List } from '../../entities/Collections'
import { GroupFieldsRelationalMapping as FixFieldNames } from '@sdcsoft/gfrm'

export = class PLC_RanMeiZhengQi extends PLC {
    constructor() {
        super()
        this.BYTE_ARRAY_LENGTH = 490
    }


    getDeviceFocusFields(): DeviceFieldForUI[] {

        let map = this.getBaseInfoFields()
        let list = new List<DeviceFieldForUI>()
        list.push(map.getItem(SdcSoftDevice.KEY_POINT_RUN_DAYS))
        list.push(map.getItem(SdcSoftDevice.KEY_POINT_RUN_HOURS))
        let map2 = this.getMockFields()
        list.push(map2.getItem('ba_shuiweizhuangtai'))
        if (map.containsKey('ba_guoluyalizhuangtai')) {
            list.push(map.getItem('ba_guoluyalizhuangtai'))
        }
        else {
            list.push(map2.getItem(FixFieldNames.KEY_MOCK_ZhengQiYaLi))
        }
        list.push(map2.getItem(FixFieldNames.KEY_MOCK_PaiYanWenDu))
        list.push(map.getItem('ba_shuiweizhuangtai'))
        return list.toArray()
    }

    protected getPowerInfo(): number {
        return this.getDeviceFields().getItem(PLC.KEY_POINT_YIN_FENG_FAN_1).getValue() > 0x7F ? 1 : 0
    }

}