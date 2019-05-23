import { Map_CTL_RT } from '../RT'
import { INumberIndex } from '../../../../../entities/IIndex'
import { SettingField } from '../../../../../meta/RT/meta'

export class Map_CTL_RT_X1_Ts extends Map_CTL_RT {

    static coms_status: INumberIndex = {
        0: '待命',
        1: '报警',
        2: '运行',
        3: '关机'
    }

    constructor() {
        super()
        this.addPoint(new SettingField('se_dangqianmoshi', 55, 2, '当前模式'))
        // this.subTypes.addItem('电热水', 'CTL_RT_X1_DRS')
        // this.subTypes.addItem('电蒸汽', 'CTL_RT_X1_DZQ')

        // this.subTypes.addItem('燃油气热水', 'CTL_RT_X1_RYRS')
        // this.subTypes.addItem('燃油气热水二段火', 'CTL_RT_X1_RYRS2')
        // this.subTypes.addItem('燃油气热水高温二段火', 'CTL_RT_X1_RYRSGW2')

        // this.subTypes.addItem('燃油气开水', 'CTL_RT_X1_RYKS')
        // this.subTypes.addItem('燃油气承压热水二段火', 'CTL_RT_X1_RYCYRS2')

        // this.subTypes.addItem('燃油气蒸汽电接点', 'CTL_RT_X1_RYZQDJD')
        // this.subTypes.addItem('燃油气蒸汽负荷调节', 'CTL_RT_X1_RYZQFHTJ')

    }
}