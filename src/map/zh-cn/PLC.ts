import { ZH_CN as ParentClass } from './ZH_CN'

export abstract class PLC extends ParentClass {
    static readonly Commands_Key_Parameters_Setting = "参数设置";
    static readonly Commands_Key_System_Ctl = "系统控制";

    static coms_status = {
        0: "待命",
        1: "运行",
        2: "报警",
    };
    static coms_atuo = {
        0: "自",
        1: "手",
    };
    static coms_ranshaoqi_status = {
        0: "停",
        1: "运行",
        2: "大火"
    };
}