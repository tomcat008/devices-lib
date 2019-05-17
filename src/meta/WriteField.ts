import { ByteField } from './ByteField'
import { DeviceFieldForUI } from './DeviceFieldForUI'
//namespace DevicesLib.meta {
export abstract class WriteField extends ByteField {

    setDeviceFieldForUIKey( fieldForUI:DeviceFieldForUI) {

    }
    getDeviceFieldForUI():DeviceFieldForUI|null
    {
        return null
    }

    getValue():number {
        return 0
    }

    haveValue(...bytes:number[]) :boolean{
        return true
    }
}
//}