import { OpenCloseField } from "../../../../../../../meta/RT/meta";
import { Map_EN_US } from "../../../../../EN_US";
import { Map_CTL_RT_T2_RYZQ_6JBS } from "./6J_BS";

export class Map_CTL_RT_T2_RYZQ_6JBS2 extends Map_CTL_RT_T2_RYZQ_6JBS {
    //6电极压力变送器2段火
    constructor() {
        super();
        this.addPoint(new OpenCloseField("oc_ranshaoqifuhe_zengda", 9, 2, "Burner Load Increase Regulation", 1, Map_EN_US.coms_open_close));
    }

}