import { PLC } from './BaseDevice'

export abstract class PLC_Dian extends PLC {

    protected getPowerInfo():number {
        // let map = this.getMockFields()
        // if (map.containsKey(PLC_Dian.KEY_POINT_JIA_RE_ZU))
        //     return map.getItem(PLC_Dian.KEY_POINT_JIA_RE_ZU).getValue() > 0 ? 1 : 0
        return 0
    }
} 