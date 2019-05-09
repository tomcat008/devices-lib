import { CTL_RT_T2_RYZQ_Ts } from "../../AScript/RYZQ";


export = class CTL_RT_T2_RYZQ_YLKZQ_180839008 extends CTL_RT_T2_RYZQ_Ts {
    
    static readonly KEY_POINT_RAN_SHAO_QI_STATUS = "oc_ranshaoqifuhe";
    constructor(){
        super();
        this.BYTE_ARRAY_LENGTH=109;
    }
    protected getPowerInfo() {
        let map = this.getOpenCloseFields();
        let i = map.getItem(CTL_RT_T2_RYZQ_YLKZQ_180839008.KEY_POINT_RAN_SHAO_QI_KONGZHI).getValue();
        if (i > 0) {
            // map.each(function(k,v){
            //     console.log(k)
            // })
            return map.getItem(CTL_RT_T2_RYZQ_YLKZQ_180839008.KEY_POINT_RAN_SHAO_QI_STATUS).getValue() > 0 ? 1 : 0;
        }
        return 0;
    }
    
}