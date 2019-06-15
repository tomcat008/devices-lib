//declare function require(moduleName: string): any
type Language = 'zh-cn' | 'en-us'
import { SdcSoftDevice } from '../devices/SdcSoftDevice'
import { map as PointMap } from '../map/map'

class DeviceAdapter {
    private lang: Language = 'zh-cn'
    private createDeviceFunc: (type: string) => SdcSoftDevice
    private createMapFunc: (lang: Language, type: string) => PointMap

    constructor(createDeviceFunc: (type: string) => SdcSoftDevice, createMapFunc: (lang: Language, type: string) => PointMap) {
        this.createDeviceFunc = createDeviceFunc
        this.createMapFunc = createMapFunc
    }

    /**
     * 获取子类别设备对象
     */
    private getSubDevice(type: string, sub: string, data: Uint8Array): SdcSoftDevice | null {
        let t: string = type + '_' + sub
        let device = this.createDeviceFunc(t)
        let map = this.createMapFunc(this.lang, t)
        if (device.validateFalse(data.byteLength)) {
            return null
        }
        device.setTypeName(t)
        map.getPointMap().each((key, value) => {
            device.handleByteField(value, data)
        })
        device.handleCommandFields(map.getCommandsMap())
        return device

    }

    getSdcSoftDevice(lang: Language, type: string, data: Uint8Array, power: number = SdcSoftDevice.POWER_MEDIA_VALUE_NULL, media: number = SdcSoftDevice.POWER_MEDIA_VALUE_NULL): SdcSoftDevice | null {
        this.lang = lang
        let device = this.createDeviceFunc(type)
        let map = this.createMapFunc(lang, type)

        if (device.validateFalse(data.byteLength)) {
            return null
        }
        /*用户确认设备类型时的逻辑
        *设置设备警告信息
        device.setWarningMsg(map.getwarningMsg())
        *设置子类设备信息
        device.setSubTypes(map.getSubTypes())
         */
        map.getPointMap().each((key, value) => {
            /*
            if (key == SdcSoftDevice.KEY_POINT_RUN_DAYS) {
                console.log('hhhhhhh')
            }*/
            device.handleByteField(value, data)
        })
        
        //自动进行子类型确认
        if (device.getSubDeviceType() != SdcSoftDevice.NO_SUB_DEVICE_TYPE) {
            console.log('has sub')
            let subDevice: SdcSoftDevice | null = this.getSubDevice(type, device.getSubDeviceType(), data)
            if (null == subDevice)
                return null
            device = subDevice
        }
        else{
            console.log('no sub')
            device.setTypeName(type)
            device.handleCommandFields(map.getCommandsMap())
        }

        let powerUI = device.getBaseInfoFields().getItem(SdcSoftDevice.KEY_POINT_POWER)
        let mediaUI = device.getBaseInfoFields().getItem(SdcSoftDevice.KEY_POINT_MEDIA)
        if (powerUI && mediaUI) {
            if (power != SdcSoftDevice.POWER_MEDIA_VALUE_NULL &&
                media != SdcSoftDevice.POWER_MEDIA_VALUE_NULL) {
                //设备中需要显示的点位都必须出现在点位表中，即使通过header传递的点位也必需在点位表中设置。
                //只有出现在点位表中的点位才能进行多语言转换，如燃料。如果“燃料”不在点位表中添加，则“燃料”
                // 的多语言翻译无法在程序中确认。
                powerUI.setValue(power)
                powerUI.setValueString(map.getPowerString(power))
                mediaUI.setValue(media)
                mediaUI.setValueString(map.getMediaString(media))

            } else {
                device.setPower(powerUI.getValue())
                device.setMedia(mediaUI.getValue())
            }
        }
        else {
            device.setPower(0)
            device.setMedia(0)
        }

        return device
    }
}
/*
export class Web_DeviceAdapterUtil {
    private static adapter: DeviceAdapter = new DeviceAdapter((type) => {
        let strs = type.split('_')
        let path = '../devices/' + strs.join('/')
        let deviceType = require(path)
        let d = new deviceType()
        return d
    }, (type, lang) => {
        let strs = type.split('_')
        let path = '../map/' + lang + '/' + strs.join('/')
        let mapType = require(path)
        let d = new mapType()
        return d
    })


    static getSdcSoftDevice(type: string, data: Buffer, power: number = SdcSoftDevice.POWER_MEDIA_VALUE_NULL, media: number = SdcSoftDevice.POWER_MEDIA_VALUE_NULL, lang: Language = 'zh-cn'): SdcSoftDevice | null {
        return this.adapter.getSdcSoftDevice(type, data, power, media, lang)
    }
}
*/
export class Wx_DeviceAdapterUtil {
    private static adapter: DeviceAdapter | null

    static InjectFunc(createDeviceFunc: (type: string) => SdcSoftDevice, createMapFunc: (lang: string, type: string) => PointMap) {
        this.adapter = new DeviceAdapter(createDeviceFunc, createMapFunc)
    }


    static getSdcSoftDevice(lang: Language, type: string, data: Uint8Array, power: number = SdcSoftDevice.POWER_MEDIA_VALUE_NULL, media: number = SdcSoftDevice.POWER_MEDIA_VALUE_NULL): SdcSoftDevice | null {
        if (null != this.adapter) {
            return this.adapter.getSdcSoftDevice(lang, type, data, power, media)
        }
        return null
    }
}