import { MockField, OpenCloseField } from "../../../../../../../meta/RT/meta"
import { Map_CTL_RT_T2_RYZQ_4JBS2 } from "./4J_BS_2"
import { CTL_RT_T2_RYZQ_4J } from "../../../../../../../devices/CTL/RT/T2/RYZQ/AScript/4J"

export class Map_CTL_RT_T2_RYZQ_4MBS2 extends Map_CTL_RT_T2_RYZQ_4JBS2{
    //4-20mA压力变送器2段火
    constructor(){
        super()
        
        this.pointMap.remove(CTL_RT_T2_RYZQ_4J.KEY_POINT_SHUI_WEI_STATUS)
        this.addPoint(new OpenCloseField("oc_ranshaoqifuhe_zengda", 9, 2, "燃烧器负荷增大调节", 1, Map_CTL_RT_T2_RYZQ_4MBS2.coms_open_close))
        this.addPoint(new MockField("mo_shuiweixinhao", 19, 2, "水位信号", "%"))
    }
    
}