import { SdcSoftDevice, Power, Media } from "../../SdcSoftDevice";
import { ByteField } from "../../../meta/ByteField";
import { DeviceFieldForUI } from "../../../meta/DeviceFieldForUI";
import { Element as AElement } from '../../../entities/Element'
import { List } from "../../../entities/Collections";

export abstract class IP extends SdcSoftDevice {

    protected static readonly Device_Suffix_Beng = "_beng";
    protected static readonly Device_Suffix_Fan = "_fan";

    protected static readonly KEY_POINT_RAN_SHAO_QI = "de_ranshaoqi";
    protected static readonly KEY_POINT_JIA_RE_ZU = "se_jiarezushu";
    protected static readonly KEY_POINT_YIN_FENG_JI = "de_yinfengji_fan";


    public handleByteField(field: ByteField, bytes: ArrayBuffer) {
        let view = new DataView(bytes);
        switch (field.getBytesLength()) {
            case 0:
            case 2:
                //if (field.haveValue(bytes[field.getStartIndex() + 1], bytes[field.getStartIndex()])) {
                if (field.haveValue(view.getUint8(field.getStartIndex() + 1), view.getUint8(field.getStartIndex()))) {
                    this.addField(field);
                }
                break;
            default:
                if (field.haveValue(view.getUint8(field.getStartIndex() + 1), view.getUint8(field.getStartIndex()))) {
                    this.addField(field);
                }
                break;
        }
    }

    public getDeviceFocusFields(): DeviceFieldForUI[] {
        let map = this.getBaseInfoFields();
        let list = new List<DeviceFieldForUI>();
        list.push(this.getBaseInfoFields().getItem(SdcSoftDevice.KEY_POINT_RUN_DAYS));
        list.push(this.getBaseInfoFields().getItem(SdcSoftDevice.KEY_POINT_RUN_HOURS));

        if (this.power == Power.Dian) {
            list.push(this.getSettingFields().getItem("se_jiarezushu"));
            if (this.media == Media.ReShui) {
                list.push(this.getMockFields().getItem("mo_chukouwendu"));
                list.push(this.getMockFields().getItem("mo_rukouwendu"));
                list.push(this.getBaseInfoFields().getItem("ba_shuixiangshuiweizhuangtai"));
                list.push(this.getBaseInfoFields().getItem("ba_guolushuiweizhuangtai"));
            } else if (this.media == Media.DaoReYou) {

            } else if (this.media == Media.ReFeng) {

            } else if (this.media == Media.ZhengQi) {
                list.push(this.getBaseInfoFields().getItem("ba_guolushuiweizhuangtai"));
                let item = this.getBaseInfoFields().getItem("ba_guoluyalizhuangtai");
                if (item) {
                    list.push(item);
                }
                else {
                    list.push(this.getMockFields().getItem("mo_zhengqiyali"));
                }
            } else if (this.media == Media.ZhenKong) {

            }
        } else if (this.power == Power.Mei) {
            if (this.media == Media.ReShui) {
                list.push(this.getMockFields().getItem("mo_paiyanwendu"));
                list.push(this.getMockFields().getItem("mo_chukouwendu"));
                list.push(this.getMockFields().getItem("mo_rukouwendu"));
                let item = this.getBaseInfoFields().getItem("ba_guoluyalizhuangtai");
                if (item) {
                    list.push(item);
                }
                else {
                    list.push(this.getMockFields().getItem("mo_zhengqiyali"));
                }

            } else if (this.media == Media.DaoReYou) {
                list.push(this.getMockFields().getItem("mo_paiyanwendu"));
                list.push(this.getMockFields().getItem("mo_chukouwendu"));
                list.push(this.getMockFields().getItem("mo_rukouwendu"));
                let item = this.getBaseInfoFields().getItem("ba_guoluyalizhuangtai");
                if (item) {
                    list.push(item);
                }
                else {
                    list.push(this.getMockFields().getItem("mo_zhengqiyali"));
                }
            } else if (this.media == Media.ReFeng) {

            } else if (this.media == Media.ZhengQi) {
                let item = this.getBaseInfoFields().getItem("ba_guoluyalizhuangtai");
                if (item) {
                    list.push(item);
                }
                else {
                    list.push(this.getMockFields().getItem("mo_zhengqiyali"));
                }
                list.push(this.getMockFields().getItem("mo_paiyanwendu"));
                list.push(this.getBaseInfoFields().getItem("ba_guolushuiweizhuangtai"));

            } else if (this.media == Media.ZhenKong) {

            }
        } else if (this.power == Power.ShengWuZhi) {
            if (this.media == Media.ReShui) {

            } else if (this.media == Media.DaoReYou) {

            } else if (this.media == Media.ReFeng) {

            } else if (this.media == Media.ZhengQi) {

            } else if (this.media == Media.ZhenKong) {

            }
        } else if (this.power == Power.YouQi) {
            if (this.media == Media.ReShui) {
                list.push(this.getMockFields().getItem("mo_paiyanwendu"));
                list.push(this.getMockFields().getItem("mo_chukouwendu"));
                list.push(this.getMockFields().getItem("mo_jinkouwendu"));
                list.push(this.getBaseInfoFields().getItem("ba_guolushuiweizhuangtai"));
                                                            
                list.push(this.getBaseInfoFields().getItem("ba_shuixiangshuiweizhuangtai"));
            } else if (this.media == Media.DaoReYou) {
                list.push(this.getMockFields().getItem("mo_paiyanwendu"));
                list.push(this.getMockFields().getItem("mo_chukouwendu"));
                list.push(this.getMockFields().getItem("mo_rukouwendu"));
            } else if (this.media == Media.ReFeng) {
                list.push(this.getMockFields().getItem("mo_chukouwendu"));
                list.push(this.getDeviceFields().getItem("de_ranshaoqi"));
                list.push(this.getDeviceFields().getItem("de_yinfengji"));
            } else if (this.media == Media.ZhengQi) {
                list.push(this.getBaseInfoFields().getItem("ba_guolushuiweizhuangtai"));
                list.push(this.getMockFields().getItem("mo_paiyanwendu"));

                let item = this.getBaseInfoFields().getItem("ba_guoluyalizhuangtai");
                if (item) {
                    list.push(item);
                }
                else {
                    list.push(this.getMockFields().getItem("mo_zhengqiyali"));
                }

            } else if (this.media == Media.ZhenKong) {
                list.push(this.getMockFields().getItem("mo_paiyanwendu"));
                list.push(this.getMockFields().getItem("mo_chukouwendu"));
                list.push(this.getMockFields().getItem("mo_meishuiwendu"));
                list.push(this.getBaseInfoFields().getItem("ba_guolushuiweizhuangtai"));
                let item = this.getBaseInfoFields().getItem("ba_guoluyalizhuangtai");
                if (item) {
                    list.push(item);
                }
                else {
                    list.push(this.getMockFields().getItem("mo_zhengqiyali"));
                }

            }
        }
        return list.toArray();
    }


    protected getPowerInfo(): number {
        if (this.power == Power.Dian) {
            return this.getSettingFields().getItem(IP.KEY_POINT_JIA_RE_ZU).getValue() > 0 ? 1 : 0;
        } else if (this.power == Power.Mei) {
            return this.getDeviceFields().getItem(IP.KEY_POINT_YIN_FENG_JI).getValue() > 0x7F ? 1 : 0;
        }
        return this.getDeviceFields().getItem(IP.KEY_POINT_RAN_SHAO_QI).getValue() > 0x7F ? 1 : 0;
    }

    public getBeng(): AElement[] {
        return this.getElements(IP.Device_Suffix_Beng, AElement.Prefix_Beng, AElement.Index_Beng_Count);
    }

    public getFan(): AElement[] {
        return this.getElements(IP.Device_Suffix_Fan, AElement.Prefix_Fan, AElement.Index_Fan_Count);
    }

    private getElements(deviceSuffix: string, elementPrefix: string, valueIndex: number): AElement[] {
        let list: AElement[] = [];
        this.getDeviceFields().each((key, value) => {
            if (value.getName().indexOf(deviceSuffix) > -1) {
                let element = new AElement();
                element.setTitle(value.getTitle());
                element.setPrefix(elementPrefix);

                let v = value.getValue() & 0x80;

                if (0x80 == v) {
                    element.SetValues(valueIndex, 1, 1);
                } else {
                    element.SetValues(valueIndex, 1, 0);
                }
                list.push(element);
            }
        });
        return list;
    }
}