import { StringHashMap } from '../entities/Collections'
import { Command } from '../command/Command'
import { ByteField } from '../meta/ByteField'

export abstract class map {

    static readonly KEY_BASE = 'baseInfo'
    static readonly KEY_RUN = 'runInfo'
    static readonly KEY_EXCEPTION = 'exceptionInfo'
    static readonly KEY_MOCK = 'mockInfo'
    static readonly KEY_SETTING = 'settingInfo'
    static readonly KEY_START_STOP = 'startStopInfo'
    static readonly KEY_DEVICE = 'deviceInfo'
    static readonly KEY_OPEN_CLOSE = 'openclose'
    /**
     * 计算属性的KEY
     */
    static readonly KEY_Count_Fields = 'countfields'
    static readonly KEY_POINT_SYSTEM_STATUS = 'o_system_status'
    static readonly KEY_POINT_POWER = 'o_power'
    static readonly KEY_POINT_MEDIA = 'o_media'
    static readonly KEY_POINT_RUN_LIFE = 'ba_yunxingshijian'
    static readonly KEY_POINT_RUN_DAYS = 'ba_yunxingtianshu'
    static readonly KEY_POINT_RUN_HOURS = 'ba_yunxingxiaoshishu'




    protected pointMap: StringHashMap<ByteField> = new StringHashMap<ByteField>()
    protected commandMap: StringHashMap<Command[]|null> = new StringHashMap<Command[]|null>()
    //protected subTypes: StringHashMap<string> = new StringHashMap<string>()
    //protected warningMsg:string = ''

    getPointMap(): StringHashMap<ByteField> {
        return this.pointMap
    }
    getCommandsMap(): StringHashMap<Command[]|null> {
        return this.commandMap
    }
    // getSubTypes(){
    //     return this.subTypes
    // }
    // getwarningMsg(){
    //     return this.warningMsg
    // }
    protected addCommandGroup(groupKey:string){
        this.commandMap.addItem(groupKey, null)
    }
    protected addPoint(byteField: ByteField) {
        this.pointMap.addItem(byteField.getName(), byteField)
    }
    abstract getPowerString(key:number):string
    abstract getMediaString(key:number):string
}