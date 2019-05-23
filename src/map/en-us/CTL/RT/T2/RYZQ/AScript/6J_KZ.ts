import { OpenCloseField } from "../../../../../../../meta/RT/meta";
import { Map_EN_US } from "../../../../../EN_US";
import { Map_CTL_RT_T2_RYZQ_6J } from "./6J";
import { CountShowField } from "../../../../../../../meta/CountShowField";
import { INumberIndex } from "../../../../../../../entities/IIndex";
import { CTL_RT_T2_RYZQ_6JKZ } from "../../../../../../../devices/CTL/RT/T2/RYZQ/AScript/6J_KZ";

export class Map_CTL_RT_T2_RYZQ_6JKZ extends Map_CTL_RT_T2_RYZQ_6J{
    //6电极压力控制器2端火
    static KZQ_YaLiStatus: INumberIndex = {        
        0: 'High pressure',
        1: 'Medium voltage',
        2: 'Error',
        3: 'Low pressure'
    }
    constructor(){
        super();
        this.addPoint(new CountShowField(Map_CTL_RT_T2_RYZQ_6JKZ.KEY_BASE,CTL_RT_T2_RYZQ_6JKZ.KEY_POINT_YA_LI_STATUS, "Pressure state",''));
        this.addPoint(new OpenCloseField("oc_ranshaoqifuhe_zengda", 9, 2, "Burner Load Increase Regulation", 1, Map_EN_US.coms_open_close));
        this.addPoint(new OpenCloseField("oc_fuhetiaojie", 5, 2, "Load regulation", 7, Map_EN_US.coms_open_close));
        this.addPoint(new OpenCloseField("oc_qitingkongzhi", 5, 2, "Start stop control", 8, Map_EN_US.coms_open_close));
        this.addPoint(new OpenCloseField("oc_dishuiweibaojingdianji_6dianjiteyou_", 5, 2, "Low Water Level Alarm Electrode (6 Electrodes Specific)", 1, Map_EN_US.coms_open_close));
        this.addPoint(new OpenCloseField("oc_zhongshuiweidianji_6dianjiteyou_", 5, 2, "Medium Water Level Electrode (6 Electrode Specific)", 3, Map_EN_US.coms_open_close));
    
    }
    
}