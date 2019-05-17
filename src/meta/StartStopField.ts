import { ByteField } from './ByteField'
import { DeviceFieldForUI } from './DeviceFieldForUI'
import { map } from '../map/map'
//namespace DevicesLib.meta {
export abstract class StartStopField extends ByteField {

    setDeviceFieldForUIKey( fieldForUI:DeviceFieldForUI) {
        fieldForUI.setKey(map.KEY_START_STOP)
    }
}
//}