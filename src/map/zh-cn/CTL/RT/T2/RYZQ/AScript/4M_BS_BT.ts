import { MockField } from "../../../../../../../meta/RT/meta";
import { Map_CTL_RT_T2_RYZQ_4JBSBT } from "./4J_BS_BT";

export class Map_CTL_RT_T2_RYZQ_4MBSBT extends Map_CTL_RT_T2_RYZQ_4JBSBT{
    //4-20mA压力变送器内置比调
    constructor(){
        super();
        this.addPoint(new MockField("mo_shuiweixinhao", 19, 2, "水位信号", "%"));
    }
    
}