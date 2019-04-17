declare function require(moduleName: string): any;

import { Wx_DeviceAdapterUtil, SdcSoftDevice } from '../src';
import { map as PointMap } from '../src/map/map'
import * as Request from 'supertest'
import { Command } from '../src/command/Command';

Wx_DeviceAdapterUtil.InjectFunc(function(type:string):SdcSoftDevice{
    let strs = type.split('_')
    console.log(strs.join('/'));
    let path = '../src/devices/' + strs.join('/');
    let deviceType = require(path);
    let d = new deviceType();
    return d;
},function(type:string,lang:string='zh-cn'):PointMap{
    let strs = type.split('_')
    let path = '../src/map/' + lang + '/' + strs.join('/');
    let mapType = require(path);
    let d = new mapType();
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
    console.log('--------------------控制命令--------------------');
    let cmds = device.getCommands();
    cmds.each(function(key,cmds){
        console.log(key);
        for(let i in cmds ){
            console.log('\t'+cmds[i].getTitle());
        }
    });
}
function getCommands(device:SdcSoftDevice){
    console.log('commands:');
    let cmds = device.getCommands();
    cmds.each((k,v)=>{
        v.forEach(element => {
            if(element.getTitle()=='系统控制')
            element.setValue(10);
        });
    });
    let str:string ='';
    cmds.each((k,v)=>{
        v.forEach(e=>{
            str+=e.getCommandString();
        });
    });
    console.log(str);
    str ='';
    let data = Command.hexStringToBytes(str);
    if(data){
        for(let i = 0;i <data.length;i++){
            str+=data[i].valueOf();
            str+=' ';
        }
    }
    console.log(str);
}
function getDeviceInfo(device:SdcSoftDevice){
    let fields = device.getDeviceFocusFields();
    console.log('--------------------关注信息--------------------');
    for(let i in fields){
        console.log('title:='+fields[i].getTitle()+' value:='+fields[i].getValueString());
    }
    console.log('--------------------动画信息--------------------');
    let element = device.getStoveElement();
    console.log('锅炉动画:='+element.getElementPrefixAndValuesString());
}
function getSubTypes(device:SdcSoftDevice){
    // let names = device.getSubTypesNameArray();
    // for(let n in names){
    //     console.log(names[n] +':='+device.getSubDeviceType(names[n]));
    // }
}
function getWarningMsg(device:SdcSoftDevice){
    // console.log('waring msg:='+device.getWarningMsg());
}
//let request = Request('http://output.sdcsoft.com.cn/device2').post('/get2');
let request = Request('http://localhost:8080');//.get('/home/output');

function checkDeviceByGet(deviceNo:string,type:string,done:any)
{
    request.get('/home/output?id='+deviceNo)
        .expect(200).then(response => {
            let data = new Uint8Array(response.body);
            console.log(type+' data:'+data.length)
            let device: SdcSoftDevice | null = Wx_DeviceAdapterUtil.getSdcSoftDevice(type, data);
            if (device) {
                printDevice(device);
                getCommands(device);

            } else {
                console.log('empty!!!!');
            }
            done();
        });
}
function checkDeviceByPost(deviceNo:string,type:string,done:any)
{
    request.post('/home/output').send('id='+deviceNo)
        .expect(200).then(response => {
            let data = new Uint8Array(response.body);
            let device: SdcSoftDevice | null = Wx_DeviceAdapterUtil.getSdcSoftDevice(type, data);
            if (device) {
                printDevice(device);
                getCommands(device);

            } else {
                console.log('empty!!!!');
            }
            done();
        });
}
/*
function checkDeviceSubInfo(deviceNo:string,type:string,done:any)
{
    request.send('id='+deviceNo)
        .expect(200).then(response => {
            //let data = new Uint8Array(500);
            let data = new Uint8Array(response.body);
            let device: SdcSoftDevice | null = Wx_DeviceAdapterUtil.getSdcSoftDevice(type, data);
            if (device) {
                getWarningMsg(device);
                getSubTypes(device);
                getDeviceInfo(device)

            } else {
                console.log('empty!!!!');
            }
            done();
        });
}*/

export {Wx_DeviceAdapterUtil,checkDeviceByGet,checkDeviceByPost,request as request};