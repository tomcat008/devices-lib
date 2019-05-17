import { INumberIndex } from '../../../../../entities/IIndex'
import { Map_CTL_RT } from '../RT'
import { Map_ZH_CN } from '../../../ZH_CN'
import { DeviceField } from '../../../../../meta/RT/meta'
import { CTL_RT } from '../../../../../devices/CTL/RT/RT'

export class Map_CTL_RT_T2_Ts extends Map_CTL_RT {

    static coms_status: INumberIndex = {
        0: '待命',
        1: '报警',
        2: '运行'
    }

    constructor(){
        super()
        // this.subTypes.addItem('燃油气蒸汽','CTL_RT_T2_RYZQ')
        // this.subTypes.addItem('燃油气热水','CTL_RT_T2_RYRS')
        this.addPoint(new DeviceField(CTL_RT.KEY_POINT_RAN_SHAO_QI_KONGZHI, 9, 2, '燃烧器启停控制',0,Map_ZH_CN.coms_open_close))
    }
}