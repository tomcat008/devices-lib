import { INumberIndex } from "../../../../../entities/IIndex";
import { Map_CTL_RT } from "../RT";

export class Map_CTL_RT_T3_Ts extends Map_CTL_RT {

    static coms_status: INumberIndex = {
        0: "待命",
        1: "报警",
        2: "运行"
    }
    constructor(){
        super();
        // this.subTypes.addItem('燃油气蒸汽','CTL_RT_T3_RYZQ');
    }
}