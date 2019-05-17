import { IP } from './CTL_NJZJ'
import { SdcSoftDevice } from '../../SdcSoftDevice'

export abstract class IP_Http extends IP {

    constructor(){
        super()
        this.BYTE_ARRAY_LENGTH = 1024
    }

    handleDeviceNo():void{

    }

    
    /**
     * 用于子类型确认的字节长度
     */
    protected bytesLength = 0

    public validateFalse(bytesLength: number): boolean {
        this.bytesLength = bytesLength
        return this.BYTE_ARRAY_LENGTH > bytesLength
    }

    getSubDeviceType():string{
        if(this.bytesLength > this.BYTE_ARRAY_LENGTH)
            return this.bytesLength.toString()
        return SdcSoftDevice.NO_SUB_DEVICE_TYPE
    }
}