import { CountField } from "../../../../../../../meta/CountField"
import { DeviceField, SettingField } from "../../../../../../../meta/RT/meta"
import { CTL_RT } from "../../../../../../../devices/CTL/RT/RT"
import { Map_ZH_CN } from "../../../../../ZH_CN"
import { Map_CTL_RT_X1_3JDJD } from "../../AScript/RS_3J_DJD"
import { FixedValueField } from "../../../../../../../meta/FixedValueField"
import { SdcSoftDevice } from "../../../../../../../devices/SdcSoftDevice"

//点热水
export class Map_CTL_RT_X1_BKSR_RMRS_5 extends Map_CTL_RT_X1_3JDJD {
    constructor() {
        super()
        this.addPoint(new CountField(CTL_RT.KEY_POINT_GU_FENG_FAN, "鼓风机"))
        this.addPoint(new CountField(CTL_RT.KEY_POINT_YIN_FENG_FAN, "引风机"))
        this.addPoint(new CountField(CTL_RT.KEY_POINT_LENG_NING_BENG, "热水泵"))

        this.addPoint(new FixedValueField(SdcSoftDevice.KEY_POINT_POWER, "燃料类型", 2, Map_ZH_CN.coms_power))

        this.addPoint(new DeviceField(CTL_RT.KEY_POINT_LENG_NING_BENG_1, 9, 2, "热水泵", 2, Map_ZH_CN.coms_open_close))
        this.addPoint(new DeviceField("de_xunhuanbeng_zidong/shoudong_", 49, 2, "热水泵 手/自", 3, Map_CTL_RT_X1_BKSR_RMRS_5.coms_auto))

        this.addPoint(new DeviceField(CTL_RT.KEY_POINT_YIN_FENG_FAN_1, 9, 2, "引风机", 0, Map_ZH_CN.coms_open_close))
        this.addPoint(new DeviceField(CTL_RT.KEY_POINT_GU_FENG_FAN_1, 9, 2, "鼓风机", 1, Map_ZH_CN.coms_open_close))

        this.addPoint(new SettingField("se_gufengyanshi", 59, 2, "鼓风延时", "s"))
        this.addPoint(new SettingField("se_yinfengyanshi", 61, 2, "引风延时", 's'))
    }
}