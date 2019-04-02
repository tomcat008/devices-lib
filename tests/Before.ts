declare function require(moduleName: string): any;

import { Js_DeviceAdapterUtil, SdcSoftDevice } from '../src';
import { map as PointMap } from '../src/map/map'

Js_DeviceAdapterUtil.InjectFunc(function(type:string):SdcSoftDevice{
    let deviceType = require("../src/devices/" + type);
    let d = new deviceType();
    return d;
},function(type:string,lang:string='zh-cn'):PointMap{
    let deviceType = require('../src/map/'+lang +'/'+ type);
    let d = new deviceType();
    return d;
});

function printDevice(device:SdcSoftDevice){
    let fields = device.getDeviceFocusFields();
    console.log('--------------------关注信息--------------------');
    for(let i in fields){
        console.log('title:='+fields[i].getTitle()+' value:='+fields[i].getValueString());
    }
    console.log('--------------------基本信息--------------------');
    device.getBaseInfoFields().each((key,value)=>{
        console.log('title:='+value.getTitle()+' value:='+value.getValueString());
    });
    console.log('--------------------模拟信息--------------------');
    device.getMockFields().each((key,value)=>{
        console.log('title:='+value.getTitle()+' value:='+value.getValueString());
    });
    console.log('--------------------异常信息--------------------');
    device.getExceptionFields().each((key,value)=>{
        console.log('title:='+value.getTitle());
    });
    console.log('--------------------设置参数--------------------');
    device.getSettingFields().each((key,value)=>{
        console.log('title:='+value.getTitle()+' value:='+value.getValueString());
    });
    console.log('--------------------设备信息--------------------');
    device.getDeviceFields().each((key,value)=>{
        console.log('title:='+value.getTitle()+' value:='+value.getValueString());
    });
    console.log('--------------------动画信息--------------------');
    let element = device.getStoveElement();
    console.log('锅炉动画:='+element.getElementPrefixAndValuesString());
    let elements = device.getBeng();
    for(let i in elements){
        console.log(elements[i].getTitle()+':='+elements[i].getElementPrefixAndValuesString());
    }
    elements = device.getFan();
    for(let i in elements){
        console.log(elements[i].getTitle()+':='+elements[i].getElementPrefixAndValuesString());
    }
    
}
export {Js_DeviceAdapterUtil,printDevice};