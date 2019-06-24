import { ByteField } from './ByteField'
import { DeviceFieldForUI } from './DeviceFieldForUI'
import { GroupKeys } from '@sdcsoft/comms'
//namespace DevicesLib.meta {
export abstract class ExceptionField extends ByteField {

    static readonly Exception_NULL = -1
    static readonly Exception_Waring = 0
    static readonly Exception_Error = 1

    /**
     * 异常等级
     */
    protected level = 0
    setDeviceFieldForUIKey(fieldForUI: DeviceFieldForUI) {
        fieldForUI.setKey(GroupKeys.KEY_EXCEPTION)
    }

    getExceptionLevel() {
        return this.level
    }

    getDeviceFieldForUI(value?: number): DeviceFieldForUI | null {
        let fieldForUI: DeviceFieldForUI = new DeviceFieldForUI()
        this.setDeviceFieldForUIKey(fieldForUI)
        fieldForUI.setName(this.getName())
        fieldForUI.setTitle(this.getTitle())
        fieldForUI.setExcptionLevel(this.level)
        return fieldForUI
    }
}
//}