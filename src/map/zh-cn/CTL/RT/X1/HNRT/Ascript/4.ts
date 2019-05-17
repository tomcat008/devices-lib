import { CountField } from "../../../../../../../meta/CountField";
import { DeviceField } from "../../../../../../../meta/RT/meta";
import { CTL_RT } from "../../../../../../../devices/CTL/RT/RT";
import { Map_ZH_CN } from "../../../../../ZH_CN";
import { FixedValueField } from "../../../../../../../meta/FixedValueField";
import { SdcSoftDevice } from "../../../../../../../devices/SdcSoftDevice";
import { Map_CTL_RT_X1_3JDJD } from "../../AScript/RS_3J_DJD";

//点热水
export class Map_CTL_RT_X1_HNRT_DRS_4 extends Map_CTL_RT_X1_3JDJD {
    constructor() {
        super();
        this.addPoint(new CountField(CTL_RT.KEY_POINT_RAN_SHAO_QI, "加热组"));
        this.addPoint(new CountField(CTL_RT.KEY_POINT_LENG_NING_BENG, "热水泵"));

        this.addPoint(new FixedValueField(SdcSoftDevice.KEY_POINT_POWER, "燃料类型", 1, Map_ZH_CN.coms_power));

        this.addPoint(new DeviceField("oc_jiarezu1kongzhi", 9, 2, "加热组1", 0, Map_ZH_CN.coms_open_close));
        this.addPoint(new DeviceField("oc_jiarezu2kongzhi", 9, 2, "加热组2", 1, Map_ZH_CN.coms_open_close));
        this.addPoint(new DeviceField(CTL_RT.KEY_POINT_LENG_NING_BENG_1, 9, 2, "热水泵", 2, Map_ZH_CN.coms_open_close));
        this.addPoint(new DeviceField("de_xunhuanbeng_zidong/shoudong_", 49, 2, "热水泵 手/自", 3, Map_CTL_RT_X1_HNRT_DRS_4.coms_auto));
    }
}