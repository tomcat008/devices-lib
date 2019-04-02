declare function require(moduleName: string): any;

import * as mocha from 'mocha'
import * as should from 'should'
import {Js_DeviceAdapterUtil as deviceAdapter,printDevice} from './Before';
import { SdcSoftDevice } from '../src';


mocha.describe('设备测试',function(){
    it('CTL_NJZJ_IPK2_485',function(done){
        let data = new Uint8Array(1749);
        let device:SdcSoftDevice|null = deviceAdapter.getSdcSoftDevice('CTL_NJZJ_IPK2_485',data);
        if(device){
            printDevice(device);
            
        }else{
            console.log('empty!');
        }
        done();
    });
});