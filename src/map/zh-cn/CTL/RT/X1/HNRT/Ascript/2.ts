import { CountField } from '../../../../../../../meta/CountField'
import { DeviceField, OpenCloseField, ExceptionField } from '../../../../../../../meta/RT/meta'
import { CTL_RT } from '../../../../../../../devices/CTL/RT/RT'
import { Map_ZH_CN } from '../../../../../ZH_CN'
import { Map_CTL_RT_X1_3JDJD } from '../../AScript/RS_3J_DJD'
//燃油热水2段火
export class Map_CTL_RT_X1_HNRT_RYRS_2 extends Map_CTL_RT_X1_3JDJD {
    constructor() {
        super()

        //this.addPoint(new CountField(CTL_RT.KEY_POINT_RAN_SHAO_QI, '燃烧器'))
        this.addPoint(new CountField(CTL_RT.KEY_POINT_LENG_NING_BENG, '多功能泵'))

        this.addPoint(new DeviceField(CTL_RT.KEY_POINT_RAN_SHAO_QI_KONGZHI, 9, 2, '燃烧器', 0, Map_ZH_CN.coms_open_close))
        this.addPoint(new DeviceField(CTL_RT.KEY_POINT_LENG_NING_BENG_1, 9, 2, '多功能泵', 2, Map_ZH_CN.coms_open_close))
        this.addPoint(new DeviceField('de_xunhuanbeng_zidong/shoudong_', 49, 2, '多功能泵 手/自', 3, Map_CTL_RT_X1_HNRT_RYRS_2.coms_auto))


        this.addPoint(new ExceptionField('ex_ranshaoqiguzhangbaojing', 45, 2, '燃烧器故障报警', 6))
        
        this.addPoint(new OpenCloseField('oc_ranshaoqiguzhang', 5, 2, '燃烧器故障', 7, Map_ZH_CN.coms_open_close))

        this.addPoint(new OpenCloseField('oc_ranshaoqifuhetiaojie', 9, 2, '燃烧器负荷调节', 1, Map_ZH_CN.coms_open_close))
    }
}