

import { SdcSoftDevice } from './devices/SdcSoftDevice'
import { Wx_DeviceAdapterUtil as DeviceAdapterUtil } from './utils/DeviceAdapterUtil'
import * as Commands from './command/Command'
import { CRC16Util } from './utils/CRC16Util'
import { StringHashMap } from './entities/Collections';


//import { checkDevice } from './test/Before'

//checkDevice('0222222222','CTL_RT_T2_RYZQ_YLKZQ_180839008',function(){})
let devicesHashTable = new StringHashMap<SdcSoftDevice>();


export { SdcSoftDevice, DeviceAdapterUtil, Commands, CRC16Util,devicesHashTable as SdcSoftDeviceHashMap }