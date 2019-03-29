import { PointField } from './PointField'
import { Command } from '../command/Command'

//namespace DevicesLib.meta {
export abstract class CommandField extends PointField {
    /**
     * 485内存地址
     */
    protected address: string = '';
    protected maxValue: number = 100;
    protected minValue: number = 0;
    protected commandGroupKey: string = '';

    getAddress() {
        return this.address;
    }

    setAddress(address: string) {
        this.address = address;
    }

    getMaxValue() {
        return this.maxValue;
    }

    setMaxValue(maxValue: number) {
        this.maxValue = maxValue;
    }

    getMinValue() {
        return this.minValue;
    }

    setMinValue(minValue: number) {
        this.minValue = minValue;
    }

    getCommandGroupKey() {
        return this.commandGroupKey;
    }

    setCommandGroupKey(commandGroupKey: string) {
        this.commandGroupKey = commandGroupKey;
    }

    /**
     * 获取写入命令
     * @return
     */
    getCommand(): Command | null {
        if (null == this.getAddress() || this.getAddress().length < 4)
            return null;

        let cmd = this.createCommandAndInitValue();
        if (cmd) {
            cmd.setAddress(this.getAddress());
            cmd.setUnit(this.getUnit());
            cmd.setTitle(this.getTitle());
            cmd.setMinValue(this.getMinValue());
            cmd.setMaxValue(this.getMaxValue());
        }

        return cmd;
    }

    protected abstract createCommandAndInitValue(): Command | null;

}
//}