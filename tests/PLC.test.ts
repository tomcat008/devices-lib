import * as mocha from 'mocha'
import { checkDeviceByPost } from './Before';


mocha.describe('PLC 设备测试',function(){
    
    // it('PLC_DianReShui',function(done){
    //     checkDeviceByPost('0100100027','PLC_DianReShui',done);
    // });
    // it('PLC_DianZhengQi',function(done){
        
    // });
    
    // it('PLC_RanYouZhengQi',function(done){
    //     checkDeviceByGet('0100200011','PLC_RanYouZhengQi',done);
    // });
    it('PLC_DianReShui',function(done){
        checkDeviceByPost('0100100027','PLC_DianReShui',done);
    });
});
