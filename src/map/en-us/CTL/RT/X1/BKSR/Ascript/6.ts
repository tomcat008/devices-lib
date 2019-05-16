import { Map_CTL_RT_X1_HNRT_RYZQ_5 } from '../../HNRT/Ascript/5';
import { ExceptionField } from '../../../../../../../meta/RT/meta';

//燃油蒸汽2段火压力控制器
export class Map_CTL_RT_X1_BKSR_RYZQ_6 extends Map_CTL_RT_X1_HNRT_RYZQ_5 {
    constructor() {
        super();

        this.addPoint(new ExceptionField("ex_paiyanwenduchuanganqiguzhang", 45, 2, "排烟温度传感器故障",1));
        this.addPoint(new ExceptionField("ex_paiyanwendugao", 45, 2, "排烟温度高",2));
        this.addPoint(new ExceptionField("ex_gaoshuiweibaojing", 45, 2, "高水位报警",3));
        this.addPoint(new ExceptionField("ex_shuiweichuanganqiguzhang", 45, 2, "水位传感器故障",4));
       
    }
}