import { INumberIndex } from "../../../../../entities/IIndex";
import { Map_CTL_RT } from "../RT";
import { DeviceField } from "../../../../../meta/RT/meta";
import { CTL_RT } from "../../../../../devices/CTL/RT/RT";


export class Map_CTL_RT_T2_Ts extends Map_CTL_RT {

    static coms_status: INumberIndex = {
        0: "Wait",
        1: "Warn",
        2: "Runing"
    }

    constructor(){
        super();
        // this.subTypes.addItem('燃油气蒸汽','CTL_RT_T2_RYZQ');
        // this.subTypes.addItem('燃油气热水','CTL_RT_T2_RYRS');
        this.addPoint(new DeviceField(CTL_RT.KEY_POINT_RAN_SHAO_QI_KONGZHI, 9, 2, 'Start-stop control of burner',0,Map_CTL_RT_T2_Ts.coms_open_close))
    }
}