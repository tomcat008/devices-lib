import { CTL_RT } from "./RT";

export class CTL_RT_H1_Ts extends CTL_RT {

    
    constructor() {
        super();
        this.subTypes.addItem('燃油气蒸汽','CTL_RT_H1_RYZQ');
        this.subTypes.addItem('燃油气热水','CTL_RT_H1_RYRS');

    }
}