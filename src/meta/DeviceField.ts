import { ByteField } from './ByteField'
import { DeviceFieldForUI } from './DeviceFieldForUI'
import { GroupKeys } from '@sdcsoft/comms'
//namespace DevicesLib.meta {
export abstract class DeviceField extends ByteField {
    setDeviceFieldForUIKey( fieldForUI:DeviceFieldForUI) {
        fieldForUI.setKey(GroupKeys.KEY_DEVICE)
    }
}
//}