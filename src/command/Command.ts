import { CRC16Util } from '../utils/CRC16Util'
import { NumberUtil } from '../utils/NumberUtil';

//namespace DevicesLib.cmd {


export abstract class Command {
    static readonly INT_VALUE = 1;
    static readonly FLOAT_VALUE = 2;
    static readonly FLOAT_MAP_VALUE = 3;
    static readonly TIME_VALUE = 4;
    static readonly OPEN_CLOSE_VALUE = 5;
    static readonly SYSTEM_VALUE = 6;

    protected name: string = '';
    protected address: string = '';
    protected valueString: string = '';
    protected value: string = '';
    private modbusNo: number = 1;
    protected unit: string='';

    getValueString(): string {
        return this.valueString;
    }

    getCommandString(): string {
        if (this.valueIsSet) {
            this.valueIsSet = false;
            let str = this.convertToString();
            this.valueString = "";
            return str.toUpperCase();
        }
        return "";
    }

    setModbusNo(modbusNo: number) {
        this.modbusNo = modbusNo;
    }

    protected getModbusNo() {
        return this.modbusNo;
    }


    setUnit(unit: string) {
        this.unit = unit;
    }



    setTitle(title: string) {
        this.title = title;
    }

    protected title: string='';
    protected action: string = "06";
    protected valueType: number = Command.INT_VALUE;
    protected valueIsSet: boolean = false;

    setMaxValue(maxValue: number) {
        this.maxValue = maxValue;
    }

    setMinValue(minValue: number) {
        this.minValue = minValue;
    }

    protected maxValue: number=100;
    protected minValue: number=0;

    setScript(script: string) {
        this.script = script;
    }

    protected script: string='';

    setAddress(address: string) {
        this.address = address;
    }

    getValueType() {
        return this.valueType;
    }

    getMaxValue() {
        return this.maxValue;
    }

    getMinValue() {
        return this.minValue;
    }

    public getName() {
        return this.name;
    }

    setName(name: string) {
        this.name = name;
    }

    initValue(...values: number[]) {
        this.handleValue(values);
    }

    setValue(...values: number[]) {
        if (null == values)
            return;
        if (null == values[0])
            return;
        this.handleValue(values);
        this.valueIsSet = true;
    }

    getValue() {
        return this.value;
    }

    getTitle() {
        return this.title;
    }

    getUnit() {
        return this.unit;
    }

    abstract handleValue(values: number[]): void;

    abstract convertToString(): string;

    getCommand() {
        if (this.valueIsSet) {
            this.valueIsSet = false;
            let str = this.convertToString();
            this.value = "";
            return str.toUpperCase();
        }
        return "";
    }

    static toBytes(str: string): ArrayBuffer|null {
        if (null != str && str.length != 0) {
            let len = str.length / 2;
            let bytes = new ArrayBuffer(len);
            let v = new Uint8Array(bytes);
            for (let i = 0; i < len; i++) {
                v[i] = (new Number(str.substr(i * 2, i * 2 + 2))).valueOf();// as number;
            }
            return bytes;
        }
        return null;
    }
    static toNumbers(str: string): number[] {
        let numbers: number[] = [];
        if (null != str && str.length != 0) {
            let len = str.length / 2;
            for (let i = 0; i < len; i++) {
                //console.log(str.substr(i * 2, 2));
                numbers.push((new Number(str.substr(i * 2, 2))).valueOf());
            }
        }
        return numbers;
    }
    /**
    static intToHexString(x: number, hexLength: number = 4): string {
        let str = x.toString(16);
        for (let i = str.length; i < hexLength; i++) {
            str += ("0" + str);
        }
        return str;
    }
*/
    static intToBytes4(n: number): ArrayBuffer {
        let b = new ArrayBuffer(4);
        let v = new Uint8Array(b);
        for (let i = 0; i < 4; i++) {
            v[i] = (n >> (24 - i * 8));
        }
        return b;
    }



    initCommand(name: string, address: string, maxValue: number, minValue: number, value: number) {
        this.setName(name);
        this.setAddress(address);
        this.setMinValue(minValue);
        this.setMaxValue(maxValue);
        this.initValue(value);
    }

    protected evalScriptText(value:string) {
    
    }
}
export class IntCommand extends Command {

    constructor() {
        super();
        this.valueType = Command.INT_VALUE;
    }

    handleValue(values: number[]): void {
        this.valueString = values[0].toString();
        this.value = NumberUtil.NumberToString(values[0], 16, 4);// Command.intToHexString(values[0]);
    }

    convertToString(): string {
        let no = NumberUtil.NumberToString(this.getModbusNo(), 16, 4);//Command.intToHexString(this.getModbusNo());
        let baseStr = no + this.action + this.address + this.value;
        let data = Command.toNumbers(baseStr);
        return baseStr + CRC16Util.getCrc(CRC16Util.calcCrc16(data, 0, data.length)) + "0000000000";
    }
}
export class TimeCommand extends IntCommand {
    constructor() {
        super();
        this.valueType = Command.TIME_VALUE;
        this.script = "";
    }

    handleValue(values: number[]) {

        let hstr = (values[0] / 60).toString();
        let mstr = (values[1] % 60).toString();

        if (2 > hstr.length)
            hstr = "0" + hstr;
        if (2 > mstr.length)
            mstr = "0" + mstr;

        this.valueString = hstr + ":" + mstr;;
        this.value = NumberUtil.NumberToString(values[0] * 60 + values[1], 16, 4); //Command.intToHexString(values[0] * 60 + values[1]);
    }
}
export class SystemCommand extends IntCommand {
    constructor() {
        super();
        this.valueType = Command.SYSTEM_VALUE;
        this.valueIsSet = false;
    }
}
export class FloatCommand extends Command {

    constructor() {
        super();
        this.action = "10";
        this.valueType = Command.FLOAT_VALUE;
    }

    public handleValue(values: number[]) {
        this.valueString = values[0].toFixed(2);
        let data = new ArrayBuffer(4);
        let view = new DataView(data);
        view.setFloat32(0, values[0], false);

        this.value = NumberUtil.NumberToString(view.getUint8(0), 16, 2) +
            NumberUtil.NumberToString(view.getUint8(1), 16, 2) +
            NumberUtil.NumberToString(view.getUint8(2), 16, 2) +
            NumberUtil.NumberToString(view.getUint8(3), 16, 2);
    }

    public convertToString(): string {
        let no = NumberUtil.NumberToString(this.getModbusNo(), 16, 4);
        return no + this.action + this.address + '000204' + this.value;
    }
}
//}