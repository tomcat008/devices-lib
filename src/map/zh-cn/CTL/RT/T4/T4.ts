import { INumberIndex } from "../../../../../entities/IIndex";
import { CTL_RT } from "../RT";

export abstract class CTL_RT_T3 extends CTL_RT {

    static coms_status: INumberIndex = {
        0: "待命",
        1: "报警",
        2: "运行",
        3: "关机"
    }
}