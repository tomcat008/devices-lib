import { OpenCloseField } from "../../../../../../../meta/RT/meta";
import { Map_ZH_CN } from "../../../../../ZH_CN";
import { Map_CTL_RT_T2_RYZQ_6J } from "./6J";
import { CountShowField } from "../../../../../../../meta/CountShowField";
import { INumberIndex } from "../../../../../../../entities/IIndex";

export class Map_CTL_RT_T2_RYZQ_6JKZ extends Map_CTL_RT_T2_RYZQ_6J{
    //6电极压力控制器2端火
    static readonly KEY_POINT_YA_LI_STATUS='ba_yali_status'
    static KZQ_YaLiStatus: INumberIndex = {        
        0: '高压',
        1: '中压',
        2: '错误',
        3: '低压'
    }
    constructor(){
        super();
        this.addPoint(new CountShowField(Map_CTL_RT_T2_RYZQ_6JKZ.KEY_BASE,Map_CTL_RT_T2_RYZQ_6JKZ.KEY_POINT_YA_LI_STATUS, "压力状态",'',false,Map_CTL_RT_T2_RYZQ_6JKZ.KZQ_YaLiStatus));
        this.addPoint(new OpenCloseField("oc_ranshaoqifuhe_zengda", 9, 2, "燃烧器负荷增大调节", 1, Map_ZH_CN.coms_open_close));
        this.addPoint(new OpenCloseField("oc_fuhetiaojie", 5, 2, "负荷调节", 7, Map_ZH_CN.coms_open_close));
        this.addPoint(new OpenCloseField("oc_qitingkongzhi", 5, 2, "启停控制", 8, Map_ZH_CN.coms_open_close));
        this.addPoint(new OpenCloseField("oc_dishuiweibaojingdianji_6dianjiteyou_", 5, 2, "低水位报警电极（6电极特有）", 1, Map_ZH_CN.coms_open_close));
        this.addPoint(new OpenCloseField("oc_zhongshuiweidianji_6dianjiteyou_", 5, 2, "中水位电极（6 电极特有）", 3, Map_ZH_CN.coms_open_close));
    
    }
    
}