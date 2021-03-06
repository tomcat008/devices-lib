import { OpenCloseField } from "../../../../../../meta/RT/meta"
import { CTL_RT } from "../../../../../../devices/CTL/RT/RT"
import { Map_CTL_RT_T3_RYZQ_Ts } from "../AScript/RYZQ"

export = class Map_CTL_RT_T3_RYZQ_YLKZQ extends Map_CTL_RT_T3_RYZQ_Ts {

    constructor() {
        super()

        // this.warningMsg=''
        this.addPoint(new OpenCloseField("oc_fuhetiaojie", 5, 2, "负荷调节", 7, Map_CTL_RT_T3_RYZQ_YLKZQ.coms_open_close))
        this.addPoint(new OpenCloseField("oc_qitingkongzhi", 5, 2, "启停控制", 8, Map_CTL_RT_T3_RYZQ_YLKZQ.coms_open_close))

        this.addPoint(new OpenCloseField(CTL_RT.KEY_POINT_RAN_SHAO_QI_KONGZHI, 9, 2, "燃烧器启停控制", 0, Map_CTL_RT_T3_RYZQ_YLKZQ.coms_open_close))
        this.addPoint(new OpenCloseField("oc_ranshaoqifuhetiaojie", 9, 2, "燃烧器调节", 1, Map_CTL_RT_T3_RYZQ_YLKZQ.coms_open_close))
    }
}
