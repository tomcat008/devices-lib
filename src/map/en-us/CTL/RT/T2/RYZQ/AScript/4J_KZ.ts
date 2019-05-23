import { OpenCloseField } from "../../../../../../../meta/RT/meta";
import { Map_EN_US } from "../../../../../EN_US";
import { Map_CTL_RT_T2_RYZQ_4J } from "./4J";
import { CountShowField } from "../../../../../../../meta/CountShowField";
import { INumberIndex } from "../../../../../../../entities/IIndex";
import { CTL_RT_T2_RYZQ_4JKZ } from "../../../../../../../devices/CTL/RT/T2/RYZQ/AScript/4J_KZ";

export class Map_CTL_RT_T2_RYZQ_4JKZ extends Map_CTL_RT_T2_RYZQ_4J{
    static KZQ_YaLiStatus: INumberIndex = {        
        0: 'High pressure',
        1: 'Medium voltage',
        2: 'Error',
        3: 'Low pressure'
    }
    //4电极压力控制器2端火
    constructor(){
        super();
        this.addPoint(new CountShowField(Map_CTL_RT_T2_RYZQ_4J.KEY_BASE,CTL_RT_T2_RYZQ_4JKZ.KEY_POINT_YA_LI_STATUS, "Pressure state",''));
        
        this.addPoint(new OpenCloseField("oc_ranshaoqifuhe_zengda", 9, 2, "Burner Load Increase Regulation", 1, Map_EN_US.coms_open_close));

        this.addPoint(new OpenCloseField("oc_fuhetiaojie", 5, 2, "Load regulation", 7, Map_EN_US.coms_open_close));
        this.addPoint(new OpenCloseField("oc_qitingkongzhi", 5, 2, "Start stop control", 8, Map_EN_US.coms_open_close));
        
    }
    
}