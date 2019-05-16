import { Map_CTL_RT_X1_Ts } from "../../AScript/X1";
import { BaseInfoField } from "../../../../../../meta/RT/meta";
import { SdcSoftDevice } from "../../../../../../devices/SdcSoftDevice";
import { CountShowField } from "../../../../../../meta/CountShowField";
import { INumberIndex } from "../../../../../../entities/IIndex";

export  class Map_CTL_RT_X1_Base extends Map_CTL_RT_X1_Ts {

    static ShuiWeiStatus_1: INumberIndex = {
        0: '缺水',
        1: '正常'
    }

    static ShuiWeiStatus_3: INumberIndex = {
        0: '缺水',
        1: '低位',
        2: '中位',
        3: '高位'
    }
    

    constructor() {
        super();

        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_SYSTEM_STATUS, 3, 2, "控制器状态",'',Map_CTL_RT_X1_Base.coms_status));
        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_RUN_LIFE, 53, 2, "运行时间","时"));
        this.addPoint(new CountShowField(Map_CTL_RT_X1_Base.KEY_BASE,SdcSoftDevice.KEY_POINT_RUN_DAYS, "运行天数", "天"));
        this.addPoint(new CountShowField(Map_CTL_RT_X1_Base.KEY_BASE,SdcSoftDevice.KEY_POINT_RUN_HOURS, "运行小时数", "时"));
        //this.addPoint(new FixedValueField(SdcSoftDevice.KEY_POINT_MEDIA, "介质类型", 0, Map_ZH_CN.coms_media));
        //this.addPoint(new FixedValueField(SdcSoftDevice.KEY_POINT_POWER, "燃料类型", 0, Map_ZH_CN.coms_power));
        
        
        this.addPoint(new CountShowField(Map_CTL_RT_X1_Base.KEY_BASE, 'ba_shuiweizhuangtai', "水位", ''));

    }
}