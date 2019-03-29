export class Element {
    static readonly Prefix_Stove = "a";
    static readonly Prefix_Beng = "b";
    static readonly Prefix_Fan = "c";

    static readonly Index_A_Power = 0;
    static readonly Index_A_Media = 1;
    static readonly Index_A_Style = 2;
    static readonly Index_A_Status = 3;

    static readonly Index_Beng_Count = 0;
    static readonly Index_Beng_Status = 1;

    static readonly Index_Fan_Count = 0;
    static readonly Index_Fan_Status = 1;

    protected values: number[] = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1];

    private title: string='';
    private prefix: string='';

    getTitle(): string {
        return this.title;
    }

    setTitle(title: string) {
        this.title = title;
    }

    getPrefix(): string {
        return this.prefix;
    }

    setPrefix(prefix: string) {
        this.prefix = prefix;
    }



    ClearValues() {
        for (let i = 0; i < this.values.length; i++) {
            this.values[i] = -1;
        }
    }

    SetValues(index: number, ...data: number[]) {
        for (let i = index, j = 0; j < data.length; i++ , j++) {
            this.values[i] = data[j];
        }
    }

    getElementPrefixAndValuesString(spacerString: string = '-') {
        let sb = this.prefix;
        for (let i in this.values) {
            if (this.values[i] > -1) {
                sb += spacerString;
                sb += this.values[i].toString();
                continue;
            }
            break;
        }
        if (this.prefix == Element.Prefix_Stove) {
            return sb.substr(0, sb.length - 1) + 'x';
        }
        return sb;
    }
}