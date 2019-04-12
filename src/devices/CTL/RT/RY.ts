import { SdcSoftDevice } from "../../SdcSoftDevice";
import { ByteField } from "../../../meta/ByteField";
import { Element as AElement } from "../../../entities/Element";
import { DeviceFieldForUI } from "../../../meta/DeviceFieldForUI";
import { List } from "../../../entities/Collections";

export abstract class CTL_RT_RY extends SdcSoftDevice {

    static readonly KEY_POINT_RAN_SHAO_QI = "_ranshaoqi";
    static readonly KEY_POINT_RAN_SHAO_QI_KONGZHI = "oc_ranshaoqiqitingkongzhi";
    static readonly KEY_POINT_Add_SHUI_BENG = "_addshuibeng";
    static readonly KEY_POINT_Add_SHUI_BENG_1 = "oc_1_addshuibeng_start_stop";
    static readonly KEY_POINT_Add_SHUI_BENG_2 = "oc_2_addshuibeng_start_stop";
    static readonly KEY_POINT_LENG_NING_BENG = "_lengningbeng";
    static readonly KEY_POINT_LENG_NING_BENG_1 = "oc_1_lengningxunhuanbeng_start_stop"
    static readonly KEY_POINT_LENG_NING_BENG_2 = "oc_2_lengningxunhuanbeng_start_stop"
    

    public handleByteField(field: ByteField, bytes: ArrayBuffer) {
        let view = new DataView(bytes);
        switch (field.getBytesLength()) {
            case 2:
                if (field.haveValue(view.getUint8(field.getStartIndex()), view.getUint8(field.getStartIndex() + 1))) {
                    this.addField(field);
                }
                break;
        }
    }
    public handleDeviceNo(bytes: number[]): string {
        return '';
    }

    protected addFocusFields(list:List<DeviceFieldForUI>){
    }
    
    public getDeviceFocusFields(): DeviceFieldForUI[] {
        let map = this.getBaseInfoFields();
        //let map2 = this.getMockFields();
        let list = new List<DeviceFieldForUI>();
        let i = map.getItem(SdcSoftDevice.KEY_POINT_RUN_LIFE).getValue();
        let field = map.getItem(SdcSoftDevice.KEY_POINT_RUN_DAYS);
        field.setValue(i / 24);
        list.push(field);
        field = map.getItem(SdcSoftDevice.KEY_POINT_RUN_HOURS);
        field.setValue(i % 24);
        list.push(field);
        //list.push(map2.getItem("mo_zhengqiyali"));
        this.addFocusFields(list);
        return list.toArray();
    }

    
    public getBeng(): AElement[] {
        let list: AElement[] = [];
        let map = this.getCountFields();
        let map2 = this.getDeviceFields();
        if (map.containsKey(CTL_RT_RY.KEY_POINT_Add_SHUI_BENG)) {
            let deviceFieldForUI = map.getItem(CTL_RT_RY.KEY_POINT_Add_SHUI_BENG);
            let element = new AElement();
            element.setTitle(deviceFieldForUI.getTitle());
            element.setPrefix(AElement.Prefix_Beng);

            let d1 = deviceFieldForUI;
            let d2 = d1;
            let count = 0;

            if (map2.containsKey(CTL_RT_RY.KEY_POINT_Add_SHUI_BENG_1)) {
                d1 = map2.getItem(CTL_RT_RY.KEY_POINT_Add_SHUI_BENG_1);
                count = 1;
            }
            if (map2.containsKey(CTL_RT_RY.KEY_POINT_Add_SHUI_BENG_2)) {
                d2 = map2.getItem(CTL_RT_RY.KEY_POINT_Add_SHUI_BENG_2);
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
        if (map.containsKey(CTL_RT_RY.KEY_POINT_LENG_NING_BENG)) {
            let deviceFieldForUI = map.getItem(CTL_RT_RY.KEY_POINT_LENG_NING_BENG);
            let element = new AElement();
            element.setTitle(deviceFieldForUI.getTitle());
            element.setPrefix(AElement.Prefix_Beng);

            let d1 = deviceFieldForUI, d2 = deviceFieldForUI;
            let count = 0;
            if (map2.containsKey(CTL_RT_RY.KEY_POINT_LENG_NING_BENG_1)) {
                d1 = map2.getItem(CTL_RT_RY.KEY_POINT_LENG_NING_BENG_1);
                count = 1;
            }
            if (map2.containsKey(CTL_RT_RY.KEY_POINT_LENG_NING_BENG_2)) {
                d2 = map2.getItem(CTL_RT_RY.KEY_POINT_LENG_NING_BENG_2);
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
        return list;
    }

    public getFan(): AElement[] {
        return [];
    }
}