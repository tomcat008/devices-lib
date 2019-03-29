import {CommandField} from './CommandField'
import {DeviceFieldForUI} from './DeviceFieldForUI'
import {Command,IntCommand} from '../command/Command'
import { NumberHashMap } from '../entities/Collections';

//namespace DevicesLib.meta {
    export abstract class ByteField extends CommandField {
        protected startIndex: number=0;
        protected bytesLength: number=0;
        protected baseNumber: number=0;
        protected bit: number=0;
        protected needFormat: boolean = false;
        protected valueMap: NumberHashMap<string>|null=null;

        protected  value:number = 0;

        getValue():number {
            return this.value;
        }

        getAddress(): string {
            return this.address;
        }

        setAddress(address: string) {
            this.address = address;
        }

        /**
         * 485内存地址
         */
        protected address: string='';
        protected maxValue: number=100;
        protected minValue: number=0;

        getStartIndex(): number {
            return this.startIndex;
        }

        setStartIndex(startIndex: number) {
            this.startIndex = startIndex;
        }

        getBytesLength(): number {
            return this.bytesLength;
        }

        setBytesLength(bytesLength: number) {
            this.bytesLength = bytesLength;
        }

        getBaseNumber(): number {
            return this.baseNumber;
        }

        setBaseNumber(baseNumber: number) {
            this.baseNumber = baseNumber;
        }

        setBit(bit: number) {
            this.bit = bit;
        }

        setValueMap(valueMap: NumberHashMap<string>) {
            this.valueMap = valueMap;
        }

        protected abstract setDeviceFieldForUIKey(fieldForUI: DeviceFieldForUI):void;



        protected createCommandAndInitValue(): Command {
            let cmd = new IntCommand();
            cmd.initValue(this.getValue());
            return cmd;
        }

        public getValueBitString(): string {
            return this.getValue().toString(10);
        }
        abstract haveValue(...bytes:number[]): boolean;

        public getValueString(): string {
            if (this.bytesLength > 0) {//bytesLength>0表示点位在数据中真实存储
                return this.getValueBitString() + this.getUnit();
            }
            //点位并不真实存在，而又其他点位计算而来。如NJRT_T2的运行天数和小时数 由运行总时间计算得出
            this.needFormat = true;
            return this.getUnit();
        }

        getDeviceFieldForUI(value?: number): DeviceFieldForUI|null {
            let fieldForUI = new DeviceFieldForUI();
            this.setDeviceFieldForUIKey(fieldForUI);
            fieldForUI.setName(this.getName());
            fieldForUI.setTitle(this.getTitle());

            fieldForUI.setValueString(this.getValueString());
            fieldForUI.setNeedFormat(this.needFormat);
            fieldForUI.setUnit(this.getUnit());
            if (value) {
                fieldForUI.setValue(value);
            }
            return fieldForUI;
        }
    }
//}