import { ExceptionField } from '../../../../../../../meta/RT/meta'
import { Map_CTL_RT_X1_HNRT_RYZQ_6 } from '../../HNRT/AScript/6'

//电蒸汽
export class Map_CTL_RT_X1_BKSR_RYZQ_7 extends Map_CTL_RT_X1_HNRT_RYZQ_6 {
    constructor() {
        super()
        
        this.pointMap.remove('oc_ranshaoqiguzhang')

        this.addPoint(new ExceptionField("ex_paiyanwenduchuanganqiguzhang", 45, 2, "排烟温度传感器故障",1))
        this.addPoint(new ExceptionField("ex_paiyanwendugao", 45, 2, "排烟温度高",2))
        this.addPoint(new ExceptionField("ex_gaoshuiweibaojing", 45, 2, "高水位报警",3))
        this.addPoint(new ExceptionField("ex_shuiweichuanganqiguzhang", 45, 2, "水位传感器故障",4))
       
    }
}