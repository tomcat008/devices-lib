import { CountField } from '../../../../../../../meta/CountField'
import { DeviceField, ExceptionField, OpenCloseField } from '../../../../../../../meta/RT/meta'
import { CTL_RT } from '../../../../../../../devices/CTL/RT/RT'
import { Map_CTL_RT_X1_ReShui } from '../../AScript/RS'
import { GroupFieldsRelationalMapping as FixFieldNames } from '@sdcsoft/gfrm'

//燃油热水2段火1电极
export class Map_CTL_RT_X1_HNRT_RYRS_9 extends Map_CTL_RT_X1_ReShui {
    constructor() {
        super()
        //this.addPoint(new CountField(CTL_RT.KEY_POINT_RAN_SHAO_QI, '燃烧器'))
        this.addPoint(new CountField(CTL_RT.KEY_POINT_LENG_NING_BENG, '循环泵'))

        this.addPoint(new DeviceField(CTL_RT.KEY_POINT_RAN_SHAO_QI_KONGZHI, 9, 2, '燃烧器', 0, Map_CTL_RT_X1_HNRT_RYRS_9.coms_open_close))
        this.addPoint(new DeviceField(CTL_RT.KEY_POINT_LENG_NING_BENG_1, 9, 2, '循环泵', 2, Map_CTL_RT_X1_HNRT_RYRS_9.coms_open_close))
        this.addPoint(new DeviceField('de_xunhuanbeng_zidong/shoudong_', 49, 2, '循环泵 手/自', 3, Map_CTL_RT_X1_HNRT_RYRS_9.coms_auto))

        this.addPoint(new ExceptionField(FixFieldNames.KEY_Expt_LuBiChaoWen, 45, 2, '炉壁超温报警', 3))
        this.addPoint(new ExceptionField('ex_ranshaoqiguzhangbaojing', 45, 2, '燃烧器故障报警', 4))

        this.addPoint(new OpenCloseField('oc_jixiandishuiweidianji', 5, 2, '极限低水位电极', 0, Map_CTL_RT_X1_HNRT_RYRS_9.coms_open_close))
        this.addPoint(new OpenCloseField('oc_lubiwendukaiguan', 5, 2, '炉壁温度开关', 4, Map_CTL_RT_X1_HNRT_RYRS_9.coms_open_close))
        this.addPoint(new OpenCloseField('oc_ranshaoqiguzhang', 5, 2, '燃烧器故障', 7, Map_CTL_RT_X1_HNRT_RYRS_9.coms_open_close))
        


        this.addPoint(new OpenCloseField('oc_ranshaoqifuhetiaojie', 9, 2, '燃烧器负荷调节', 1, Map_CTL_RT_X1_HNRT_RYRS_9.coms_open_close))
    }
}