

import { SdcSoftDevice } from './devices/SdcSoftDevice';
import { Wx_DeviceAdapterUtil,Web_DeviceAdapterUtil } from './utils/DeviceAdapterUtil';
import * as Commands from './command/Command'
import { CRC16Util } from './utils/CRC16Util'
/*
import { checkDevice } from './test/Before';

checkDevice('0233333333','CTL_NJZJ_IPK2_485',function(){});
*/
export { SdcSoftDevice, Wx_DeviceAdapterUtil,Web_DeviceAdapterUtil, Commands, CRC16Util }