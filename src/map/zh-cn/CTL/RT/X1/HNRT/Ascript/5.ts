import { CountField } from '../../../../../../../meta/CountField'
import { DeviceField, MockField, ExceptionField, OpenCloseField, SettingField } from '../../../../../../../meta/RT/meta'
import { CTL_RT } from '../../../../../../../devices/CTL/RT/RT'
import { Map_CTL_RT_X1_ZhengQi } from '../../AScript/ZQ'
import { CountShowField } from '../../../../../../../meta/CountShowField'

//燃油蒸汽2段火电接点压力表
export class Map_CTL_RT_X1_HNRT_RYZQ_5 extends Map_CTL_RT_X1_ZhengQi {

    constructor() {
        super()

        //this.addPoint(new CountField(CTL_RT.KEY_POINT_RAN_SHAO_QI, '燃烧器'))
        this.addPoint(new CountField(CTL_RT.KEY_POINT_Add_SHUI_BENG, '给水泵'))

        this.addPoint(new CountShowField(Map_CTL_RT_X1_HNRT_RYZQ_5.KEY_BASE, 'ba_yalizhuangtai', '压力状态', '', false, Map_CTL_RT_X1_HNRT_RYZQ_5.DJD_YaLiStatus))

        this.addPoint(new DeviceField(CTL_RT.KEY_POINT_RAN_SHAO_QI_KONGZHI, 9, 2, '燃烧器', 0, Map_CTL_RT_X1_HNRT_RYZQ_5.coms_open_close))
        this.addPoint(new DeviceField(CTL_RT.KEY_POINT_Add_SHUI_BENG_1, 9, 2, '给水泵', 2, Map_CTL_RT_X1_HNRT_RYZQ_5.coms_open_close))
        this.addPoint(new DeviceField('de_bushuibeng_shoudong/zidong_', 49, 2, '给水泵 手/自', 1, Map_CTL_RT_X1_HNRT_RYZQ_5.coms_auto))

        this.addPoint(new MockField('mo_paiyanwendu', 13, 2, '排烟温度', '℃'))

        this.addPoint(new ExceptionField('ex_paiyanwenduchuanganqiguzhang', 45, 2, '排烟温度传感器故障', 3))
        this.addPoint(new ExceptionField('ex_paiyanwendugao', 45, 2, '排烟温度高', 4))
        this.addPoint(new ExceptionField('ex_chaoyabaojing', 45, 2, '超压报警', 5))
        this.addPoint(new ExceptionField('ex_ranshaoqiguzhangbaojing', 45, 2, '燃烧器故障报警', 6))


        this.addPoint(new OpenCloseField('oc_dianjiedianyalibiaodizhen', 5, 2, '电接点压力低针', 4, Map_CTL_RT_X1_HNRT_RYZQ_5.coms_open_close))
        this.addPoint(new OpenCloseField('oc_dianjiedianyalibiaogaozhen', 5, 2, '电接点压力高针', 5, Map_CTL_RT_X1_HNRT_RYZQ_5.coms_open_close))
        this.addPoint(new OpenCloseField('oc_chaoyabaojing', 5, 2, '超压报警', 6, Map_CTL_RT_X1_HNRT_RYZQ_5.coms_open_close))
        this.addPoint(new OpenCloseField('oc_ranshaoqiguzhang', 5, 2, '燃烧器故障', 7, Map_CTL_RT_X1_HNRT_RYZQ_5.coms_open_close))

        this.addPoint(new OpenCloseField('oc_ranshaoqifuhetiaojie', 9, 2, '燃烧器负荷调节', 1, Map_CTL_RT_X1_HNRT_RYZQ_5.coms_open_close))

        this.addPoint(new SettingField('se_paiyanchaowen', 57, 2, '排烟超温', '℃'))
    }
}