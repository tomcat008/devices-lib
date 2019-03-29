import { ByteField } from './ByteField'
import { DeviceFieldForUI } from './DeviceFieldForUI'
import { map } from '../map/map';
//namespace DevicesLib.meta {
export abstract class DeviceField extends ByteField {
    setDeviceFieldForUIKey( fieldForUI:DeviceFieldForUI) {
        fieldForUI.setKey(map.KEY_DEVICE);
    }
}
//}