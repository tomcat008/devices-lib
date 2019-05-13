import { MockField } from "../../../../../../../meta/RT/meta";
import { Map_CTL_RT_T2_RYZQ_4JKZ } from "./4J_KZ";

export class Map_CTL_RT_T2_RYZQ_4MKZ extends Map_CTL_RT_T2_RYZQ_4JKZ{
    //4-20mA压力控制器2段火
    constructor(){
        super();
        this.addPoint(new MockField("mo_shuiweixinhao", 19, 2, "水位信号", "%"));
    }
    
}