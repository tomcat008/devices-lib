import { SdcSoftDevice } from "../../SdcSoftDevice";
import { ByteField } from "../../../meta/ByteField";
import { DeviceFieldForUI } from "../../../meta/DeviceFieldForUI";
import { List } from "../../../entities/Collections";
import { Element as AElement } from "../../../entities/Element";

export = class CTL_HNWE_485 extends SdcSoftDevice {

    public handleByteField(field: ByteField, bytes: ArrayBuffer) {
        let view = new DataView(bytes);
        switch (field.getBytesLength()) {
            case 2:
                if (field.haveValue(view.getUint8(field.getStartIndex()), view.getUint8(field.getStartIndex() + 1))) {
                    this.addField(field);
                }
                break;
            default:
                if (field.haveValue(view.getUint8(field.getStartIndex()))) {
                    this.addField(field);
                }
                break;
        }
    }

    public handleDeviceNo(bytes: number[]): string {
        return '';
    }

    public getDeviceFocusFields(): DeviceFieldForUI[] {
        let map = this.getBaseInfoFields();
        let map2 = this.getMockFields();
        let list = new List<DeviceFieldForUI>();
        let item = map.getItem(SdcSoftDevice.KEY_POINT_RUN_DAYS);
        item.setValueString('不支持');
        list.push(item);
        item = map.getItem(SdcSoftDevice.KEY_POINT_RUN_HOURS);
        item.setValueString('不支持');
        list.push(item);
        list.push(map2.getItem("mo_CHgongshuiwendu"));
        list.push(map2.getItem("mo_CHhuishuiwendu"));
        list.push(map2.getItem("mo_OTCwendu"));
        return list.toArray();
    }

    public getMode() {
        return 0;
    }
    protected getPowerInfo() {
        let value = this.getOpenCloseFields().getItem("oc_huoyan");
        return value.getValue();
    }

    public getBeng(): AElement[] {
        let list: AElement[] = [];
        let value = this.getOpenCloseFields().getItem("oc_shuibeng");
        let element = new AElement();
        element.setTitle(value.getTitle());
        element.setPrefix(AElement.Prefix_Beng);
        let v = value.getValue();

        if (1 == v) {
            element.SetValues(1, 1, 1);
        } else {
            element.SetValues(1, 1, 0);
        }
        list.push(element);
        return list;
    }

    public getFan(): AElement[] {
        let list: AElement[] = [];
        let value = this.getOpenCloseFields().getItem("oc_fengji");
        let element = new AElement();
        element.setTitle(value.getTitle());
        element.setPrefix(AElement.Prefix_Fan);
        let v = value.getValue();

        if (1 == v) {
            element.SetValues(1, 1, 1);
        } else {
            element.SetValues(1, 1, 0);
        }
        list.push(element);
        return list;
    }

}