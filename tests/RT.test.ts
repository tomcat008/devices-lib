import * as mocha from 'mocha'
import { checkDeviceByGet,checkDeviceByPost } from './Before';


mocha.describe('RT 设备测试',function(){
    
    // it('CTL_RT_H1',function(done){
    //     checkDeviceSubInfo('0233333333','CTL_RT_H1',done)
    // });
    // it('CTL_RT_H1_RYZQ',function(done){
    //     checkDeviceSubInfo('0233333333','CTL_RT_H1_RYZQ',done)
    // });
    //  it('CTL_RT_T2_RYZQ',function(done){
    //      checkDeviceByPost('0233333333','CTL_RT_T2_RYZQ',done)
    // });
    // it('CTL_RT_X1_HNRT',function(done){
    //     checkDeviceByPost('0233333333','CTL_RT_X1_HNRT',done)
    // });

    it('CTL_RT_X1_BKSR',function(done){
        checkDeviceByPost('0233333333','CTL_RT_X1_BKSR',done)
    });
    
    // it('CTL_RT_T2',function(done){
    //     checkDeviceByPost('0233333333','CTL_RT_X1',done)
    // });
});