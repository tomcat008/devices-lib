declare function require(moduleName: string): any;

import { Js_DeviceAdapterUtil } from '../utils/DeviceAdapterUtil';
import { SdcSoftDevice } from '../devices/SdcSoftDevice'
import { map as PointMap } from '../map/map'
import * as Request from 'supertest'
Js_DeviceAdapterUtil.InjectFunc(function(type:string):SdcSoftDevice{
    let deviceType = require("../devices/" + type);
    let d = new deviceType();
    return d;
},function(type:string,lang:string='zh-cn'):PointMap{
    let deviceType = require('../map/'+lang +'/'+ type);
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
/*
let request = Request('http://output.sdcsoft.com.cn/device2').post('/get2');

function checkDevice(deviceNo:string,type:string,done:any)
{
    request.send('id='+deviceNo)
        .expect(200).then(response => {
            let data = new Uint8Array(response.body);
            let device: SdcSoftDevice | null = Js_DeviceAdapterUtil.getSdcSoftDevice(type, data);
            if (device) {
                printDevice(device);

            } else {
                console.log('empty!');
            }
            done();
        });
}
*/
export {Js_DeviceAdapterUtil,checkDevice,request as request};