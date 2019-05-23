import { Map_EN_US } from '../EN_US'

export abstract class Map_PLC extends Map_EN_US {
    static readonly Commands_Key_Parameters_Setting = "参数设置";
    static readonly Commands_Key_System_Ctl = "系统控制";

    static coms_status = {
        0: "Standby",
        1: "Working",
        2: "Alarm",
    };
    static coms_atuo = {
        0: "Automatic",
        1: "Manual",
    };
    static coms_ranshaoqi_status = {
        0: "Stop",
        1: "Working",
        2: "Big Fire"
    };
    constructor() {
        super();
        this.addCommandGroup(Map_PLC.Commands_Key_Parameters_Setting);
        this.addCommandGroup(Map_PLC.Commands_Key_System_Ctl);
        /*
                this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_RUN_HOURS, 9, 2, "运行小时数", "时"));
                this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_RUN_DAYS, 11, 2, "运行天数", "天"));
                this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_SYSTEM_STATUS, 13, 2, "系统状态", '', PLC.coms_status));
                this.addPoint(new BaseInfoField("ba_shuiweizhuangtai", 19, 2, "水位状态", '', ParentClass.coms_level));
                this.addPoint(new BaseInfoField("ba_ranshaoqizhuangtai", 21, 2, "燃烧器状态", '', PLC.coms_ranshaoqi_status));
            */
    }
}