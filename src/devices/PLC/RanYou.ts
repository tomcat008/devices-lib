import { PLC } from './BaseDevice'

export abstract class PLC_RanYou extends PLC {
    static readonly KEY_POINT_RAN_SHAO_QI_STATUS = 'ba_ranshaoqizhuangtai'

    protected getPowerInfo():number {
        return this.getBaseInfoFields().getItem(PLC_RanYou.KEY_POINT_RAN_SHAO_QI_STATUS).getValue()
    }
} 