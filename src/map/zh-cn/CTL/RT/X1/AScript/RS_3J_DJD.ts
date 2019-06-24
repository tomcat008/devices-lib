
import { OpenCloseField, ExceptionField } from "../../../../../../meta/RT/meta"
import { Map_CTL_RT_X1_ReShui } from './RS'
import { INumberIndex } from "../../../../../../entities/IIndex"
import { CountShowField } from "../../../../../../meta/CountShowField"
import { GroupFieldsRelationalMapping as FixFieldNames } from '@sdcsoft/gfrm'
import { GroupKeys } from "@sdcsoft/comms";

//3电极或电接点
export class Map_CTL_RT_X1_3JDJD extends Map_CTL_RT_X1_ReShui {

    static DJD_YaLiStatus: INumberIndex = {
        0: '中压',
        1: '高压',
        2: '低压',
        3: '错误'
    }

    constructor() {
        super()
        this.addPoint(new CountShowField(GroupKeys.KEY_BASE, 'ba_yalizhuangtai', '压力状态', '', false, Map_CTL_RT_X1_3JDJD.DJD_YaLiStatus))

        this.addPoint(new OpenCloseField('oc_jixiandishuiweidianji', 5, 2, '极限低水位电极', 0, Map_CTL_RT_X1_3JDJD.coms_open_close))
        this.addPoint(new OpenCloseField('oc_didianji/dianjiedianyalibiaodizhen', 5, 2, '低位电极/电接点压力表低针', 1, Map_CTL_RT_X1_3JDJD.coms_open_close))
        this.addPoint(new OpenCloseField('oc_gaodianji/dianjiedianyalibiaogaozhen', 5, 2, '高位电极/电接点压力表高针', 2, Map_CTL_RT_X1_3JDJD.coms_open_close))
        this.addPoint(new OpenCloseField('oc_bushuibengkongzhixinhao', 5, 2, '补水泵控制信号', 3, Map_CTL_RT_X1_3JDJD.coms_open_close))

        this.addPoint(new OpenCloseField('oc_lubiwendukaiguan', 5, 2, '炉壁温度开关', 4, Map_CTL_RT_X1_3JDJD.coms_open_close))
        this.addPoint(new OpenCloseField('oc_waibuliansuobaohu', 5, 2, '外部联锁保护', 5, Map_CTL_RT_X1_3JDJD.coms_open_close))
        this.addPoint(new OpenCloseField('oc_chaoyabaojing', 5, 2, '超压报警', 6, Map_CTL_RT_X1_3JDJD.coms_open_close))

        this.addPoint(new ExceptionField('ex_shuiweichuanganqiguzhang', 45, 2, '水位传感器故障', 3))
        this.addPoint(new ExceptionField(FixFieldNames.KEY_Expt_ChaoYa, 45, 2, '超压报警', 4))
        this.addPoint(new ExceptionField(FixFieldNames.KEY_Expt_LuBiChaoWen, 45, 2, '炉壁超温报警', 5))

    }
}