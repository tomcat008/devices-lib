import { Map_EN_US } from "../../EN_US";
import { INumberIndex } from "../../../../entities/IIndex";
import { CountField } from "../../../../meta/CountField";
import { BaseInfoField } from "../../../../meta/RT/meta";
import { SdcSoftDevice } from "../../../../devices/SdcSoftDevice";
import { FixedValueField } from "../../../../meta/FixedValueField";
import { CTL_RT as Device } from "../../../../devices/CTL/RT/RT";
import { CountShowField } from "../../../../meta/CountShowField";
import { GroupKeys } from "@sdcsoft/comms";

export abstract class Map_CTL_RT extends Map_EN_US {

    static coms_ranshaoqi_status: INumberIndex = {
        0: "Working",
        1: "Big Fire"
    }
    static coms_master: INumberIndex = {
        0: "Main",
        1: "Prepare"
    }
    static coms_auto: INumberIndex = {
        0: "Automatic",
        1: "Manual"
    }

    constructor(){
        super();
        // this.warningMsg='长按修改类型';
        /*计算属性（不显示）*/
        this.addPoint(new CountField(Device.KEY_POINT_RAN_SHAO_QI, "Burner"));
       
        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_RUN_LIFE, 53, 2, "Running Time", "Hour"));
        this.addPoint(new CountShowField(GroupKeys.KEY_BASE,SdcSoftDevice.KEY_POINT_RUN_DAYS, "Running Days", "Day"));
        this.addPoint(new CountShowField(GroupKeys.KEY_BASE,SdcSoftDevice.KEY_POINT_RUN_HOURS, "Running Hours", "Hour"));
        this.addPoint(new FixedValueField(SdcSoftDevice.KEY_POINT_POWER, "Fuel Type", 0, Map_EN_US.coms_power));
        this.addPoint(new FixedValueField(SdcSoftDevice.KEY_POINT_MEDIA, "Medium Type", 0, Map_EN_US.coms_media));
    
    }
}