import { ExceptionField, OpenCloseField } from "../../../../../../meta/RT/meta"
import { INumberIndex } from '../../../../../../entities/IIndex'
import { FixedValueField } from '../../../../../../meta/FixedValueField'
import { SdcSoftDevice } from '../../../../../../devices/SdcSoftDevice'
import { Map_CTL_RT_X1_Base } from './X1'
import { GroupFieldsRelationalMapping as FixFieldNames } from '@sdcsoft/gfrm'

export class Map_CTL_RT_X1_ZhengQi extends Map_CTL_RT_X1_Base {

    static DJD_YaLiStatus: INumberIndex = {
        0: '中压',
        1: '高压',
        2: '低压',
        3: '错误'
    }

    static KZQ_YaLiStatus: INumberIndex = {
        0: "高压",
        1: "中压",
        2: '错误',
        3: "低压"
    }

    constructor() {
        super()

        this.addPoint(new FixedValueField(SdcSoftDevice.KEY_POINT_MEDIA, "介质类型", 1, Map_CTL_RT_X1_ZhengQi.coms_media))




        this.addPoint(new ExceptionField(FixFieldNames.KEY_Expt_JiXianDiShuiWei, 45, 2, '极限低水位报警', 0))
        this.addPoint(new ExceptionField(FixFieldNames.KEY_Expt_JiXianGaoShuiWei, 45, 2, '高水位报警', 1))
        this.addPoint(new ExceptionField('ex_shuiweichuanganqiguzhang', 45, 2, '水位传感器故障', 2))

        this.addPoint(new OpenCloseField('oc_jixiandishuiweidianji', 5, 2, '极限低水位电极', 0, Map_CTL_RT_X1_ZhengQi.coms_open_close))
        this.addPoint(new OpenCloseField('oc_didianji', 5, 2, '低位电极', 1, Map_CTL_RT_X1_ZhengQi.coms_open_close))
        this.addPoint(new OpenCloseField('oc_gaodianji', 5, 2, '高位电极', 2, Map_CTL_RT_X1_ZhengQi.coms_open_close))
        this.addPoint(new OpenCloseField('oc_gaobaojingdianji', 5, 2, '高报警电极', 3, Map_CTL_RT_X1_ZhengQi.coms_open_close))
    }
}