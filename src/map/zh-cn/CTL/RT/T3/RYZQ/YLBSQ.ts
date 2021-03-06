import { OpenCloseField, ExceptionField, MockField } from "../../../../../../meta/RT/meta"
import { CTL_RT } from "../../../../../../devices/CTL/RT/RT"
import { Map_CTL_RT_T3_RYZQ_Ts } from "../AScript/RYZQ"

export = class Map_CTL_RT_T3_RYZQ_YLBSQ extends Map_CTL_RT_T3_RYZQ_Ts {
    constructor() {
        super()
        // this.warningMsg=''
        this.addPoint(new OpenCloseField(CTL_RT.KEY_POINT_RAN_SHAO_QI_KONGZHI, 9, 2, "燃烧器启停控制", 0, Map_CTL_RT_T3_RYZQ_YLBSQ.coms_open_close))
        this.addPoint(new OpenCloseField("oc_ranshaoqifuhediaojie/zengdadiaojie", 9, 2, "燃烧器负荷增大调节", 1, Map_CTL_RT_T3_RYZQ_YLBSQ.coms_open_close))
        this.addPoint(new OpenCloseField("oc_jianxiaodiaojie", 9, 2, "减小调节", 2, Map_CTL_RT_T3_RYZQ_YLBSQ.coms_open_close))

        this.addPoint(new MockField("mo_zhengqiyali", 17, 2, "蒸汽压力", "Mpa", 100))

        this.addPoint(new ExceptionField("ex_yalibiansongqiduanlu1", 45, 2, "压力变送器断路", 0))
        this.addPoint(new ExceptionField("ex_yalibiansongqiduanlu", 45, 2, "压力变送器短路", 1))
        this.addPoint(new ExceptionField("ex_chaoyabaojing_biansongqi_", 45, 2, "超压报警（变送器）", 2))
    }
}
