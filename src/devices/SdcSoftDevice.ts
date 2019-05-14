import { StringHashMap } from "../entities/Collections"
import { DeviceFieldForUI } from "../meta/DeviceFieldForUI";
import { Command } from "../command/Command";
import { Element as AElement } from "../entities/Element"
import { map } from "../map/map";
import { ByteField } from "../meta/ByteField";
import { CommandField } from "../meta/CommandField";

export enum Media {
    ReShui = 0,
    ZhengQi = 1,
    DaoReYou = 2,
    ReFeng = 3,
    ZhenKong = 4,
}
export enum Power {
    YouQi = 0,
    Dian = 1,
    Mei = 2,
    ShengWuZhi = 3,
    YuRe = 30,
}
export abstract class SdcSoftDevice {
    static readonly POWER_MEDIA_VALUE_NULL = -1;
    static readonly KEY_POINT_SYSTEM_STATUS = "o_system_status";
    static readonly KEY_POINT_POWER = "o_power";
    static readonly KEY_POINT_MEDIA = "o_media";
    static readonly KEY_POINT_RUN_LIFE = "ba_yunxingshijian";
    static readonly KEY_POINT_RUN_DAYS = "ba_yunxingtianshu";
    static readonly KEY_POINT_RUN_HOURS = "ba_yunxingxiaoshishu";
    static readonly KEY_POINT_JIA_RE_ZU = "jia_re_zu_count";

    static readonly Style_Horizontal = 0;
    static readonly Style_Vertical = 1;

    private fieldMap = new StringHashMap<StringHashMap<DeviceFieldForUI>>();
    private commandMap = new StringHashMap<Command[]>();

    constructor() {
        this.fieldMap.addItem(map.KEY_BASE, new StringHashMap<DeviceFieldForUI>());
        this.fieldMap.addItem(map.KEY_EXCEPTION, new StringHashMap<DeviceFieldForUI>());
        this.fieldMap.addItem(map.KEY_MOCK, new StringHashMap<DeviceFieldForUI>());
        this.fieldMap.addItem(map.KEY_SETTING, new StringHashMap<DeviceFieldForUI>());
        this.fieldMap.addItem(map.KEY_DEVICE, new StringHashMap<DeviceFieldForUI>());
        this.fieldMap.addItem(map.KEY_START_STOP, new StringHashMap<DeviceFieldForUI>());
        this.fieldMap.addItem(map.KEY_OPEN_CLOSE, new StringHashMap<DeviceFieldForUI>());
        this.fieldMap.addItem(map.KEY_Count_Fields, new StringHashMap<DeviceFieldForUI>());

    }
    private modbusNo: number = 1;
    protected BYTE_ARRAY_LENGTH: number = 0;
    protected power: number = SdcSoftDevice.POWER_MEDIA_VALUE_NULL;
    protected media: number = SdcSoftDevice.POWER_MEDIA_VALUE_NULL;
    protected deviceNo: string = '';
    protected warningMsg: string = '';



    initCommandsMapKeys(map: StringHashMap<Command[]>) {
        this.commandMap = map;
    }

    setPower(power: number) {
        this.power = power;
    }
    setMedia(media: number) {
        this.media = media;
    }

    public setDeviceNo(deviceNo: string) {
        this.deviceNo = deviceNo;
    }

    private getFieldsMap(groupKey: string): StringHashMap<DeviceFieldForUI> {
        // let map = new StringHashMap<DeviceFieldForUI>();
        // let list = this.fieldMap.getItem(fieldsGroupKey);
        // for (let e in list) {
        //     map.addItem(list[e].getName(), list[e]);
        // }
        // return map;
        return this.fieldMap.getItem(groupKey)
    }

    getBaseInfoFields() {
        return this.getFieldsMap(map.KEY_BASE);
    }

    getDeviceFields() {
        return this.getFieldsMap(map.KEY_DEVICE);
    }

    getExceptionFields() {
        return this.getFieldsMap(map.KEY_EXCEPTION);
    }

    getMockFields() {
        return this.getFieldsMap(map.KEY_MOCK);
    }
    getSettingFields() {
        return this.getFieldsMap(map.KEY_SETTING);
    }

    getStartStopFields() {
        return this.getFieldsMap(map.KEY_START_STOP);
    }

    getOpenCloseFields() {
        return this.getFieldsMap(map.KEY_OPEN_CLOSE);
    }

    getCountFields() {
        return this.getFieldsMap(map.KEY_Count_Fields);
    }

 
    getExceptionCount(): number {
        return this.getExceptionFields().count;
    }

    getDeviceStatus(): DeviceFieldForUI {
        return this.getBaseInfoFields().getItem(SdcSoftDevice.KEY_POINT_SYSTEM_STATUS);
    }

    private addCommand(cmdGroupKey: string, cmd: Command) {
        if (this.commandMap.containsKey(cmdGroupKey)) {
            this.commandMap.getItem(cmdGroupKey).push(cmd);
        }
        else {
            let value: Command[] = [cmd];
            this.commandMap.addItem(cmdGroupKey, value);
        }

    }

    private addUIField(field: DeviceFieldForUI) {

        if (null == field)
            return;
        if (this.fieldMap.containsKey(field.getKey()))
            this.fieldMap.getItem(field.getKey()).addItem(field.getName(),field);
    }

    protected addField(field: ByteField): void;
    protected addField(field: CommandField): void;
    protected addField(field: DeviceFieldForUI): void;
    protected addField(field: ByteField | CommandField | DeviceFieldForUI): void {

        if (field instanceof ByteField) {
            //需要剔除纯控制程序点位
            let ui = field.getDeviceFieldForUI();
            if (ui) {
                this.addUIField(ui);
            }
            //处理保护执行命令的点位
            let cmd = field.getCommand();
            if (cmd) {
                this.addCommand(field.getCommandGroupKey(), cmd);
            }
            return;
        }
        if (field instanceof CommandField) {
            let cmd = field.getCommand();
            if (cmd) {
                this.addCommand(field.getCommandGroupKey(), cmd);
            }
            return;
        }
        if (field instanceof DeviceFieldForUI) {
            this.addUIField(field);
        }
    }

    public removeField(groupKey: string, fieldName: string): void {
        this.fieldMap.getItem(groupKey).remove(fieldName)
    }

    /**
     * 获取炉子元素信息
     * @returns AElement
     */
    getStoveElement(): AElement {
        let element = new AElement();
        element.setPrefix(AElement.Prefix_Stove);
        element.setTitle("锅炉");
        element.SetValues(AElement.Index_A_Power, this.power, this.media, this.getPowerInfo(), SdcSoftDevice.Style_Horizontal);
        return element;
    }


    validateFalse(bytesLength: number): boolean {
        return this.BYTE_ARRAY_LENGTH > bytesLength;
    }
    getCommands(): StringHashMap<Command[]> {
        this.commandMap.each((key, value) => {
            for (let index in value) {
                value[index].setModbusNo(this.modbusNo);
            }
        });
        return this.commandMap;
    }
    /*
    设备类型由用户确认时执行的逻辑
     子类型映射map
  
    private subTypes = new StringHashMap<string>();


    getDeviceType(): string {
        return '';
    }
 
    setSubTypes(map:StringHashMap<string>):void{
        this.subTypes = map;
    }
    
    /
     * 根据子类型展示名称获取子类型名称
     * @param key 子类型展示名称
     
    getSubDeviceType(key: string): string {
        return this.subTypes.getItem(key);
    }
    
     * 获取子类型展示名称列表
     
    getSubTypesNameArray() {
        return this.subTypes.Keys;
    }
    
     * 获取设备的警告信息
     
    getWarningMsg(){
        return this.warningMsg;
    }
    
     * 设置设备的警告信息
     
    setWarningMsg(msg:string){
        this.warningMsg = msg;
    }
    */
    /**
     * 自动确认设备类型的逻辑
     */
    /**
     * 无子类型的标识
     */
    static readonly NO_SUB_DEVICE_TYPE = '-1';
    /**
     * 获取设备的子类型命令
     */
    getSubDeviceType(): string {
        return SdcSoftDevice.NO_SUB_DEVICE_TYPE;
    }

    abstract handleDeviceNo(bytes: number[]): void;

    protected abstract getPowerInfo(): number;
    /**
    * 获取泵元素集合
    */
    abstract getBeng(): AElement[];

    /**
     * 获取风扇元素集合
     */
    abstract getFan(): AElement[];

    abstract handleByteField(field: ByteField, bytes: Uint8Array): void;
    abstract getDeviceFocusFields(): DeviceFieldForUI[];

}