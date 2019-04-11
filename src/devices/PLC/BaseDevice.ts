import { NumberUtil } from "../../utils/NumberUtil";
import { Element as AElement } from '../../entities/Element'
import { DeviceFieldForUI } from "../../meta/DeviceFieldForUI";
import { SdcSoftDevice } from "../SdcSoftDevice";
import { ByteField } from "../../meta/ByteField";

export abstract class PLC extends SdcSoftDevice {

    public static readonly KEY_POINT_Add_SHUI_BENG = "_addshuibeng";
    public static readonly KEY_POINT_Add_SHUI_BENG_1 = "de_1_addshuibeng_start_stop";
    public static readonly KEY_POINT_Add_SHUI_BENG_2 = "de_2_addshuibeng_start_stop";


    public static readonly KEY_POINT_XUN_HUAN_BENG = "_xunhuanbeng";
    public static readonly KEY_POINT_XUN_HUAN_BENG_1 = "de_1_xunhuanbeng_start_stop";
    public static readonly KEY_POINT_XUN_HUAN_BENG_2 = "de_2_xunhuanbeng_start_stop";
    public static readonly KEY_POINT_XUN_HUAN_BENG_3 = "de_3_xunhuanbeng_start_stop";

    public static readonly KEY_POINT_CHU_YANG_BENG = "_chuanyangbeng";
    public static readonly KEY_POINT_CHU_YANG_BENG_1 = "de_1_chuyangbeng_start_stop";
    public static readonly KEY_POINT_CHU_YANG_BENG_2 = "de_2_chuyangbeng_start_stop";

    public static readonly KEY_POINT_ZHU_YOU_BENG = "_zhuyoubeng";
    public static readonly KEY_POINT_ZHU_YOU_BENG_1 = "de_zhuyoubeng_start_stop";

    public static readonly KEY_POINT_ZHEN_KONG_BENG = "_zhenkongbeng";
    public static readonly KEY_POINT_ZHEN_KONG_BENG_1 = "de_zhenkongbeng_start_stop";

    public static readonly KEY_POINT_JIE_NENG_BENG = "_jienengbeng";
    public static readonly KEY_POINT_JIE_NENG_BENG_1 = "de_1_jienengbeng_start_stop";
    public static readonly KEY_POINT_JIE_NENG_BENG_2 = "de_2_jienengbeng_start_stop";

    public static readonly KEY_POINT_ZHAO_QI_FAN = "_zhaoqifan";
    public static readonly KEY_POINT_ZHAO_QI_FAN_1 = "de_1_zhaoqifengji_start_stop";
    public static readonly KEY_POINT_ZHAO_QI_FAN_2 = "de_2_zhaoqifengji_start_stop";

    public static readonly KEY_POINT_GU_FENG_FAN = "_gufengfan";
    public static readonly KEY_POINT_GU_FENG_FAN_1 = "de_1_gufengji_start_stop";

    public static readonly KEY_POINT_YIN_FENG_FAN = "_yinfengfan";
    public static readonly KEY_POINT_YIN_FENG_FAN_1 = "de_1_yinfengji_start_stop";

    public static readonly KEY_POINT_LU_PAI_FAN = "_lupaifan";
    public static readonly KEY_POINT_LU_PAI_FAN_1 = "de_lupai_start_stop";

    public static readonly KEY_POINT_CHU_ZHA_FAN = "_chuzhafan";
    public static readonly KEY_POINT_CHU_ZHA_FAN_1 = "de_chuzha_start_stop";



    public handleByteField(field: ByteField, bytes: Uint8Array) {
        //let view = new DataView(bytes);
        switch (field.getBytesLength()) {
            case 0:
            case 2:
                //if (field.haveValue(bytes[field.getStartIndex() + 1], bytes[field.getStartIndex()])) {
                if (field.haveValue(bytes[field.getStartIndex()], bytes[field.getStartIndex() + 1])) {
                    this.addField(field);
                }
                break;
            case 4:
                if (field.haveValue(bytes[field.getStartIndex()], bytes[field.getStartIndex() + 1], bytes[field.getStartIndex() + 2], bytes[field.getStartIndex() + 3])) {
                    this.addField(field);
                }
                break;
        }
    }




    public handleDeviceNo(bytes: number[]): string {
        let deviceNo = bytes[5] << 24 + bytes[6] << 16 + bytes[7] << 8 + bytes[8];
        //let deviceNo = String.format("%1$010d", new BigInteger(new byte[]{bytes[5], bytes[6], bytes[7], bytes[8]}).intValue());
        let str = NumberUtil.NumberToString(deviceNo, 10, 10);
        this.setDeviceNo(str);
        return str;
    }

    public getBeng(): AElement[] {
        let list: AElement[] = [];

        if (this.getCountFields().containsKey(PLC.KEY_POINT_Add_SHUI_BENG)) {
            let deviceFieldForUI = this.getCountFields().getItem(PLC.KEY_POINT_Add_SHUI_BENG);
            let element = new AElement();
            element.setTitle(deviceFieldForUI.getTitle());
            element.setPrefix(AElement.Prefix_Beng);
            let d1: DeviceFieldForUI = new DeviceFieldForUI();
            let d2 = d1;

            let count = 0;
            if (this.getDeviceFields().containsKey(PLC.KEY_POINT_Add_SHUI_BENG_1)) {
                d1 = this.getDeviceFields().getItem(PLC.KEY_POINT_Add_SHUI_BENG_1);
                count = 1;
            }
            if (this.getDeviceFields().containsKey(PLC.KEY_POINT_Add_SHUI_BENG_2)) {
                d2 = this.getDeviceFields().getItem(PLC.KEY_POINT_Add_SHUI_BENG_2);
                count += 2;
            }
            let v1 = 0, v2 = 0;
            switch (count) {
                case 1:
                    v1 = d1.getValue() > 0 ? 1 : 0;
                    element.SetValues(AElement.Index_Beng_Count, 1, v1);
                    list.push(element);
                    break;
                case 2:
                    v2 = d2.getValue() > 0 ? 1 : 0;
                    element.SetValues(AElement.Index_Beng_Count, 1, v2);
                    list.push(element);
                    break;
                case 3:
                    v1 = d1.getValue() > 0 ? 1 : 0;
                    v2 = d2.getValue() > 0 ? 2 : 0;
                    element.SetValues(AElement.Index_Beng_Count, 2, v1 + v2);
                    list.push(element);
                    break;
            }
        }

        if (this.getCountFields().containsKey(PLC.KEY_POINT_XUN_HUAN_BENG)) {
            let deviceFieldForUI = this.getCountFields().getItem(PLC.KEY_POINT_XUN_HUAN_BENG);
            let element = new AElement();
            element.setTitle(deviceFieldForUI.getTitle());
            element.setPrefix(AElement.Prefix_Beng);
            let d1: DeviceFieldForUI = new DeviceFieldForUI();
            let d2: DeviceFieldForUI = d1;
            let d3: DeviceFieldForUI = d1;
            let count = 0;
            if (this.getDeviceFields().containsKey(PLC.KEY_POINT_XUN_HUAN_BENG_1)) {
                d1 = this.getDeviceFields().getItem(PLC.KEY_POINT_XUN_HUAN_BENG_1);
                count = 1;
            }
            if (this.getDeviceFields().containsKey(PLC.KEY_POINT_XUN_HUAN_BENG_2)) {
                d2 = this.getDeviceFields().getItem(PLC.KEY_POINT_XUN_HUAN_BENG_2);
                count += 2;
            }
            if (this.getDeviceFields().containsKey(PLC.KEY_POINT_XUN_HUAN_BENG_3)) {
                d3 = this.getDeviceFields().getItem(PLC.KEY_POINT_XUN_HUAN_BENG_3);
                count += 4;
            }
            let v1 = 0, v2 = 0, v3 = 0;
            switch (count) {
                case 1:
                    v1 = d1.getValue() > 0 ? 1 : 0;
                    element.SetValues(AElement.Index_Beng_Count, 1, v1);
                    list.push(element);
                    break;
                case 2:
                    v2 = d2.getValue() > 0 ? 1 : 0;
                    element.SetValues(AElement.Index_Beng_Count, 1, v2);
                    list.push(element);
                    break;
                case 3:
                    v1 = d1.getValue() > 0 ? 1 : 0;
                    v2 = d2.getValue() > 0 ? 2 : 0;
                    element.SetValues(AElement.Index_Beng_Count, 2, v1 + v2);
                    list.push(element);
                    break;
                case 4:
                    v2 = d2.getValue() > 0 ? 1 : 0;
                    element.SetValues(AElement.Index_Beng_Count, 1, v2);
                    list.push(element);
                    break;
                case 5:
                    v1 = d1.getValue() > 0 ? 1 : 0;
                    v3 = d3.getValue() > 0 ? 4 : 0;
                    element.SetValues(AElement.Index_Beng_Count, 2, v1 + v3);
                    list.push(element);
                    break;
                case 6:
                    v2 = d2.getValue() > 0 ? 2 : 0;
                    v3 = d3.getValue() > 0 ? 4 : 0;
                    element.SetValues(AElement.Index_Beng_Count, 2, v2 + v3);
                    list.push(element);
                    break;
                case 7:
                    v1 = d1.getValue() > 0 ? 1 : 0;
                    v2 = d2.getValue() > 0 ? 2 : 0;
                    v3 = d3.getValue() > 0 ? 4 : 0;
                    element.SetValues(AElement.Index_Beng_Count, 3, v1 + v2 + v3);
                    list.push(element);
                    break;
            }
        }

        if (this.getCountFields().containsKey(PLC.KEY_POINT_CHU_YANG_BENG)) {
            let deviceFieldForUI = this.getCountFields().getItem(PLC.KEY_POINT_CHU_YANG_BENG);
            let element = new AElement();
            element.setTitle(deviceFieldForUI.getTitle());
            element.setPrefix(AElement.Prefix_Beng);
            let d1: DeviceFieldForUI = new DeviceFieldForUI(); let d2 = d1;
            let count = 0;
            if (this.getDeviceFields().containsKey(PLC.KEY_POINT_CHU_YANG_BENG_1)) {
                d1 = this.getDeviceFields().getItem(PLC.KEY_POINT_CHU_YANG_BENG_1);
                count = 1;
            }
            if (this.getDeviceFields().containsKey(PLC.KEY_POINT_CHU_YANG_BENG_2)) {
                d2 = this.getDeviceFields().getItem(PLC.KEY_POINT_CHU_YANG_BENG_2);
                count += 2;
            }
            let v1 = 0, v2 = 0;
            switch (count) {
                case 1:
                    v1 = d1.getValue() > 0 ? 1 : 0;
                    element.SetValues(AElement.Index_Beng_Count, 1, v1);
                    list.push(element);
                    break;
                case 2:
                    v2 = d2.getValue() > 0 ? 1 : 0;
                    element.SetValues(AElement.Index_Beng_Count, 1, v2);
                    list.push(element);
                    break;
                case 3:
                    v1 = d1.getValue() > 0 ? 1 : 0;
                    v2 = d2.getValue() > 0 ? 2 : 0;
                    element.SetValues(AElement.Index_Beng_Count, 2, v1 + v2);
                    list.push(element);
                    break;
            }
        }

        if (this.getCountFields().containsKey(PLC.KEY_POINT_ZHU_YOU_BENG)) {
            let deviceFieldForUI = this.getCountFields().getItem(PLC.KEY_POINT_ZHU_YOU_BENG);
            let element = new AElement();
            element.setTitle(deviceFieldForUI.getTitle());
            element.setPrefix(AElement.Prefix_Beng);
            let d1: DeviceFieldForUI = new DeviceFieldForUI();
            let count = 0;
            if (this.getDeviceFields().containsKey(PLC.KEY_POINT_ZHU_YOU_BENG_1)) {
                d1 = this.getDeviceFields().getItem(PLC.KEY_POINT_ZHU_YOU_BENG_1);
                count = 1;
            }

            let v1 = 0;
            switch (count) {
                case 1:
                    v1 = d1.getValue() > 0 ? 1 : 0;
                    element.SetValues(AElement.Index_Beng_Count, 1, v1);
                    list.push(element);
                    break;
            }
        }

        if (this.getCountFields().containsKey(PLC.KEY_POINT_JIE_NENG_BENG)) {
            let deviceFieldForUI = this.getCountFields().getItem(PLC.KEY_POINT_JIE_NENG_BENG);
            let element = new AElement();
            element.setTitle(deviceFieldForUI.getTitle());
            element.setPrefix(AElement.Prefix_Beng);
            let d1: DeviceFieldForUI = new DeviceFieldForUI(); let d2 = d1;
            let count = 0;
            if (this.getDeviceFields().containsKey(PLC.KEY_POINT_JIE_NENG_BENG_1)) {
                d1 = this.getDeviceFields().getItem(PLC.KEY_POINT_JIE_NENG_BENG_1);
                count = 1;
            }
            if (this.getDeviceFields().containsKey(PLC.KEY_POINT_JIE_NENG_BENG_2)) {
                d2 = this.getDeviceFields().getItem(PLC.KEY_POINT_JIE_NENG_BENG_2);
                count += 2;
            }
            let v1 = 0, v2 = 0;
            switch (count) {
                case 1:
                    v1 = d1.getValue() > 0 ? 1 : 0;
                    element.SetValues(AElement.Index_Beng_Count, 1, v1);
                    list.push(element);
                    break;
                case 2:
                    v2 = d2.getValue() > 0 ? 1 : 0;
                    element.SetValues(AElement.Index_Beng_Count, 1, v2);
                    list.push(element);
                    break;
                case 3:
                    v1 = d1.getValue() > 0 ? 1 : 0;
                    v2 = d2.getValue() > 0 ? 2 : 0;
                    element.SetValues(AElement.Index_Beng_Count, 2, v1 + v2);
                    list.push(element);
                    break;
            }
        }

        if (this.getCountFields().containsKey(PLC.KEY_POINT_ZHEN_KONG_BENG)) {
            let deviceFieldForUI = this.getCountFields().getItem(PLC.KEY_POINT_ZHEN_KONG_BENG);
            let element = new AElement();
            element.setTitle(deviceFieldForUI.getTitle());
            element.setPrefix(AElement.Prefix_Beng);
            let d1: DeviceFieldForUI = new DeviceFieldForUI();
            let count = 0;
            if (this.getDeviceFields().containsKey(PLC.KEY_POINT_ZHEN_KONG_BENG_1)) {
                d1 = this.getDeviceFields().getItem(PLC.KEY_POINT_ZHEN_KONG_BENG_1);
                count = 1;
            }

            let v1 = 0;
            switch (count) {
                case 1:
                    v1 = d1.getValue() > 0 ? 1 : 0;
                    element.SetValues(AElement.Index_Beng_Count, 1, v1);
                    list.push(element);
                    break;
            }
        }

        return list;
    }


    public getFan(): AElement[] {
        let list: AElement[] = [];

        if (this.getCountFields().containsKey(PLC.KEY_POINT_GU_FENG_FAN)) {
            let deviceFieldForUI = this.getCountFields().getItem(PLC.KEY_POINT_GU_FENG_FAN);
            let element = new AElement();
            element.setTitle(deviceFieldForUI.getTitle());
            element.setPrefix(AElement.Prefix_Fan);

            let d1: DeviceFieldForUI = new DeviceFieldForUI();
            let count = 0;
            if (this.getDeviceFields().containsKey(PLC.KEY_POINT_GU_FENG_FAN_1)) {
                d1 = this.getDeviceFields().getItem(PLC.KEY_POINT_GU_FENG_FAN_1);
                count = 1;
            }
            let v1 = 0;
            switch (count) {
                case 1:
                    v1 = d1.getValue() > 0 ? 1 : 0;
                    element.SetValues(AElement.Index_Fan_Count, 1, v1);
                    list.push(element);
                    break;
            }
        }

        if (this.getCountFields().containsKey(PLC.KEY_POINT_YIN_FENG_FAN)) {
            let deviceFieldForUI = this.getCountFields().getItem(PLC.KEY_POINT_YIN_FENG_FAN);
            let element = new AElement();
            element.setTitle(deviceFieldForUI.getTitle());
            element.setPrefix(AElement.Prefix_Fan);
            let d1: DeviceFieldForUI = new DeviceFieldForUI();
            let count = 0;
            if (this.getDeviceFields().containsKey(PLC.KEY_POINT_YIN_FENG_FAN_1)) {
                d1 = this.getDeviceFields().getItem(PLC.KEY_POINT_YIN_FENG_FAN_1);
                count = 1;
            }
            let v1 = 0;
            switch (count) {
                case 1:
                    v1 = d1.getValue() > 0 ? 1 : 0;
                    element.SetValues(AElement.Index_Fan_Count, 1, v1);
                    list.push(element);
                    break;
            }
        }
        if (this.getCountFields().containsKey(PLC.KEY_POINT_ZHAO_QI_FAN)) {
            let deviceFieldForUI = this.getCountFields().getItem(PLC.KEY_POINT_ZHAO_QI_FAN);
            let element = new AElement();
            element.setTitle(deviceFieldForUI.getTitle());
            element.setPrefix(AElement.Prefix_Fan);
            let d1: DeviceFieldForUI = new DeviceFieldForUI(); let d2 = d1;
            let count = 0;
            if (this.getDeviceFields().containsKey(PLC.KEY_POINT_ZHAO_QI_FAN_1)) {
                d1 = this.getDeviceFields().getItem(PLC.KEY_POINT_ZHAO_QI_FAN_1);
                count = 1;
            }
            if (this.getDeviceFields().containsKey(PLC.KEY_POINT_ZHAO_QI_FAN_2)) {
                d2 = this.getDeviceFields().getItem(PLC.KEY_POINT_ZHAO_QI_FAN_2);
                count += 2;
            }
            let v1 = 0, v2 = 0;
            switch (count) {
                case 1:
                    v1 = d1.getValue() > 0 ? 1 : 0;
                    element.SetValues(AElement.Index_Fan_Count, 1, v1);
                    list.push(element);
                    break;
                case 2:
                    v2 = d2.getValue() > 0 ? 1 : 0;
                    element.SetValues(AElement.Index_Fan_Count, 1, v2);
                    list.push(element);
                    break;
                case 3:
                    v1 = d1.getValue() > 0 ? 1 : 0;
                    v2 = d2.getValue() > 0 ? 2 : 0;
                    element.SetValues(AElement.Index_Fan_Count, 2, v1 + v2);
                    list.push(element);
                    break;
            }
        }
        if (this.getCountFields().containsKey(PLC.KEY_POINT_LU_PAI_FAN)) {
            let deviceFieldForUI = this.getCountFields().getItem(PLC.KEY_POINT_LU_PAI_FAN);
            let element = new AElement();
            element.setTitle(deviceFieldForUI.getTitle());
            element.setPrefix(AElement.Prefix_Fan);
            let d1: DeviceFieldForUI = new DeviceFieldForUI();
            let count = 0;
            if (this.getDeviceFields().containsKey(PLC.KEY_POINT_LU_PAI_FAN_1)) {
                d1 = this.getDeviceFields().getItem(PLC.KEY_POINT_LU_PAI_FAN_1);
                count = 1;
            }
            let v1 = 0;
            switch (count) {
                case 1:
                    v1 = d1.getValue() > 0 ? 1 : 0;
                    element.SetValues(AElement.Index_Fan_Count, 1, v1);
                    list.push(element);
                    break;
            }
        }

        if (this.getCountFields().containsKey(PLC.KEY_POINT_CHU_ZHA_FAN)) {
            let deviceFieldForUI = this.getCountFields().getItem(PLC.KEY_POINT_CHU_ZHA_FAN);
            let element = new AElement();
            element.setTitle(deviceFieldForUI.getTitle());
            element.setPrefix(AElement.Prefix_Fan);

            let d1: DeviceFieldForUI = new DeviceFieldForUI();
            let count = 0;
            if (this.getDeviceFields().containsKey(PLC.KEY_POINT_CHU_ZHA_FAN_1)) {
                d1 = this.getDeviceFields().getItem(PLC.KEY_POINT_CHU_ZHA_FAN_1);
                count = 1;
            }
            let v1 = 0;
            switch (count) {
                case 1:
                    v1 = d1.getValue() > 0 ? 1 : 0;
                    element.SetValues(AElement.Index_Fan_Count, 1, v1);
                    list.push(element);
                    break;
            }
        }
        return list;
    }
}