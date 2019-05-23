import { Map_CTL_RT_T2_RYZQ_4JBS } from "./4J_BS";
import { OpenCloseField } from "../../../../../../../meta/RT/meta";
import { Map_EN_US } from "../../../../../EN_US";

export class Map_CTL_RT_T2_RYZQ_4JBS2 extends Map_CTL_RT_T2_RYZQ_4JBS{
    //4电极压力变送器内置比调 
    constructor(){
        super()
        
        this.addPoint(new OpenCloseField("oc_ranshaoqifuhe_zengda", 9, 2, "Burner Load Increase Regulation", 1, Map_EN_US.coms_open_close));
        
    }
    

}