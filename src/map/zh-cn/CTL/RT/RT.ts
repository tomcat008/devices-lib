import { ZH_CN } from "../../ZH_CN";
import { INumberIndex } from "../../../../entities/IIndex";
import { CountField } from "../../../../meta/CountField";
import { BaseInfoField } from "../../../../meta/RT/meta";
import { SdcSoftDevice } from "../../../../devices/SdcSoftDevice";
import { FixedValueField } from "../../../../meta/FixedValueField";
import { CTL_RT_RY } from "../../../../devices/CTL/RT/RY";
import { CountShowField } from "../../../../meta/CountShowField";

export abstract class CTL_RT extends ZH_CN {

    static coms_ranshaoqi_status: INumberIndex = {
        0: "小火",
        1: "大火"
    }
    static coms_master: INumberIndex = {
        0: "主",
        1: "备"
    }
    static coms_atuo: INumberIndex = {
        0: "自",
        1: "手"
    }

    constructor(){
        super();
        this.warningMsg='长按修改类型';
        /*计算属性（不显示）*/
        this.addPoint(new CountField(CTL_RT_RY.KEY_POINT_RAN_SHAO_QI, "燃烧器"));
       
        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_RUN_LIFE, 53, 2, "累计燃烧时间", "时"));
        this.addPoint(new CountShowField(CTL_RT.KEY_BASE,SdcSoftDevice.KEY_POINT_RUN_DAYS, "运行天数", "天"));
        this.addPoint(new CountShowField(CTL_RT.KEY_BASE,SdcSoftDevice.KEY_POINT_RUN_HOURS, "运行小时数", "时"));
        this.addPoint(new FixedValueField(SdcSoftDevice.KEY_POINT_POWER, "燃料类型", 0, ZH_CN.coms_power));
        this.addPoint(new FixedValueField(SdcSoftDevice.KEY_POINT_MEDIA, "介质类型", 0, ZH_CN.coms_media));
    
    }
}