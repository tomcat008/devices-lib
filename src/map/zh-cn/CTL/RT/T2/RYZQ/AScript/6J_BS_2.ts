import { OpenCloseField } from "../../../../../../../meta/RT/meta";
import { Map_CTL_RT_T2_RYZQ_6J } from "./6J";
import { Map_ZH_CN } from "../../../../../ZH_CN";

export class Map_CTL_RT_T2_RYZQ_6JBS2 extends Map_CTL_RT_T2_RYZQ_6J {
    //6电极压力变送器2段火
    constructor() {
        super();
        this.addPoint(new OpenCloseField("oc_ranshaoqifuhe_zengda", 9, 2, "燃烧器负荷增大调节", 1, Map_ZH_CN.coms_open_close));
    }

}