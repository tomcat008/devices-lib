import { ByteField } from './ByteField'
import { DeviceFieldForUI } from './DeviceFieldForUI'
import { GroupKeys } from '@sdcsoft/comms'
//namespace DevicesLib.meta {
export abstract class MockField extends ByteField {

    setDeviceFieldForUIKey( fieldForUI:DeviceFieldForUI) {
        fieldForUI.setKey(GroupKeys.KEY_MOCK)
    }

    getValueBitString():string{
        return this.getValue().toFixed(2)
    }
}
//}