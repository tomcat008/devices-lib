import { OpenCloseField, MockField, ExceptionField } from "../../../../../../../meta/RT/meta"
import { Map_CTL_RT_T2_RYZQ_6J } from "./6J"
import { GroupFieldsRelationalMapping as FixFieldNames } from '@sdcsoft/gfrm'

export class Map_CTL_RT_T2_RYZQ_6JBS extends Map_CTL_RT_T2_RYZQ_6J {
    //6电极压力变送器2段火
    constructor() {
        super()
        this.addPoint(new MockField(FixFieldNames.KEY_MOCK_ZhengQiYaLi, 17, 2, "蒸汽压力", "MPa", 100),"mo_zhengqiyali")

        this.addPoint(new ExceptionField("ex_yalibiansongqiduanlu", 45, 2, "压力变送器断路", 0))
        this.addPoint(new ExceptionField("ex_yalibiansongqiduanlu1", 45, 2, "压力变送器短路", 1))
    }

}