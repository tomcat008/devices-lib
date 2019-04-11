import { ZH_CN as ParentClass } from '../../ZH_CN'
export abstract class CTL_NJZJ extends ParentClass {
    static coms_status = {
            0: "关机",
            1: "待机",
            2: "运行",
            3: "报警",
        };

    static coms_ranshaoqi_status = {
        0: "停",
        1: "小火",
        2: "大火",
    };


    static coms_yalistatus = {
        0: "常压",
        1: "低压",
        2: "中压",
        3: "高压",
        4: "超压",
    };
    static coms_device = {
        0xC0: "手",
        0x3F: "自",
        0x30: "备",
        0xCF: "主",
        0x0F: "启",
        0xF0: "停",
    };

}