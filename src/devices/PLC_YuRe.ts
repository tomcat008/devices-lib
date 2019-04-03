import { PLC } from "./PLC";

export abstract class PLC_YuRe extends PLC {
    
    protected getPowerInfo():number {
        return 0;
    }
} 