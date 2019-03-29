import { ByteField } from './ByteField'
import { DeviceFieldForUI } from './DeviceFieldForUI'
import { map } from '../map/map';
//namespace DevicesLib.meta {
export abstract class MockField extends ByteField {

    setDeviceFieldForUIKey( fieldForUI:DeviceFieldForUI) {
        fieldForUI.setKey(map.KEY_MOCK);
    }

    getValueBitString():string{
        return this.getValue().toFixed(2);
    }
}
//}