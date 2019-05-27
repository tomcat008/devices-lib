import { ByteField } from './ByteField'
import { DeviceFieldForUI } from './DeviceFieldForUI'
import { map } from '../map/map'
//namespace DevicesLib.meta {
export abstract class ExceptionField extends ByteField {

    static readonly Exception_Waring = 0
    static readonly Exception_Error = 1

    /**
     * 异常等级
     */
    protected level = 0
    setDeviceFieldForUIKey( fieldForUI:DeviceFieldForUI) {
        fieldForUI.setKey(map.KEY_EXCEPTION)
    }

    getExceptionLevel(){
        return this.level
    }
}
//}