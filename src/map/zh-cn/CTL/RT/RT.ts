import { ZH_CN } from "../../ZH_CN";
import { INumberIndex } from "../../../../entities/IIndex";

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
}