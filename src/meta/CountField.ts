import { CountShowField } from './CountShowField'
import { DeviceFieldForUI } from './DeviceFieldForUI'
import { map } from '../map/map';
//namespace DevicesLib.meta {
export class CountField extends CountShowField {
    constructor(name: string, title: string) {
        super(name,title,'');
    }
    setDeviceFieldForUIKey(fieldForUI: DeviceFieldForUI) {
        fieldForUI.setKey(map.KEY_Count_Fields);
    }
}
//}