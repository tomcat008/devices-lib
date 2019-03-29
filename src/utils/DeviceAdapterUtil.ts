declare function require(moduleName: string): any;
type Language = 'zh-cn' | 'en-us';
import { SdcSoftDevice } from "../devices/SdcSoftDevice";
import { map as PointMap } from '../map/map'


export class DeviceAdapterUtil {
    private static createDeviceInstance(type: string): SdcSoftDevice {
        let deviceType = require("../devices/" + type);
        let d = new deviceType();
        return d;
    }
    private static createMapInstance(type: string, lang: Language = 'zh-cn'): PointMap {
        let mapType = require("../map/" + lang + '/' + type);
        let d = new mapType();
        return d;
    }
    /**
     * 获取子类别设备对象
     */
    private static getSubDevice(type: string,sub:string, data: Buffer,lang: Language = 'zh-cn'):SdcSoftDevice|null{
        DeviceAdapterUtil.createDeviceInstance(type+'_'+sub);
        let device = DeviceAdapterUtil.createDeviceInstance(type);
        let map = DeviceAdapterUtil.createMapInstance(type+'/'+sub, lang);
        if (device.validateFalse(data.byteLength)) {
            return null;
        }

        map.getPointMap().each((key, value) => {
            device.handleByteField(value, data);
        });
        return device;

    }
    static getSdcSoftDevice(type: string, data: Buffer, power: number = SdcSoftDevice.POWER_MEDIA_VALUE_NULL, media: number = SdcSoftDevice.POWER_MEDIA_VALUE_NULL, lang: Language = 'zh-cn'): SdcSoftDevice|null {
        let device = DeviceAdapterUtil.createDeviceInstance(type);
        let map = DeviceAdapterUtil.createMapInstance(type, lang);

        if (device.validateFalse(data.byteLength)) {
            return null;
        }

        map.getPointMap().each((key, value) => {
            if(key == SdcSoftDevice.KEY_POINT_RUN_DAYS){
                console.log('hhhhhhh');
            }
            device.handleByteField(value, data);
        });
        //需要进行子类型确认
        if(device.getSubDeviceType()>SdcSoftDevice.NO_SUB_DEVICE_TYPE){
           let subDevice:SdcSoftDevice|null = DeviceAdapterUtil.getSubDevice(type,device.getSubDeviceType.toString(),data,lang);
           if(null == subDevice)
                return null;
            device = subDevice;
        }
        let powerUI = device.getBaseInfoFields().getItem(SdcSoftDevice.KEY_POINT_POWER);
        let mediaUI = device.getBaseInfoFields().getItem(SdcSoftDevice.KEY_POINT_MEDIA);


        if (power != SdcSoftDevice.POWER_MEDIA_VALUE_NULL &&
            media != SdcSoftDevice.POWER_MEDIA_VALUE_NULL) {
            //设备中需要显示的点位都必须出现在点位表中，即使同过header传递的点位也必需在点位表中设置。
            //只有出现在点位表中的点位才能进行多语言转换，如燃料。如果“燃料”不在点位表中添加，则“燃料”
            // 的多语言翻译无法在程序中确认。
            powerUI.setValue(power);
            powerUI.setValueString(map.getPowerString(power));
            mediaUI.setValue(media);
            mediaUI.setValueString(map.getMediaString(media));

        } else {
            device.setPower(powerUI.getValue());
            device.setMedia(mediaUI.getValue());
        }
        return device;
    }
}