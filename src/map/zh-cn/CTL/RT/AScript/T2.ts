import { INumberIndex } from "../../../../../entities/IIndex";
import { CTL_RT } from "../RT";

export class CTL_RT_T2_Ts extends CTL_RT {

    static coms_status: INumberIndex = {
        0: "待命",
        1: "报警",
        2: "运行"
    }

    constructor(){
        super();
        // this.subTypes.addItem('燃油气蒸汽','CTL_RT_T2_RYZQ');
        // this.subTypes.addItem('燃油气热水','CTL_RT_T2_RYRS');
    }
}