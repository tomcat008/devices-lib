import { map } from '../map/map'

export class NumberHashMap<TValue>{

    constructor(map?: { [key: number]: TValue }) {
        if (map) {
            this.map = map
        }
    }

    private map: { [key: number]: TValue } = {}
    addItem(key: number, value: TValue) {
        this.map[key] = value
    }
    getItem(key: number) {
        return this.map[key]
    }
    get count(): number {
        return map.length
    }
    each(func: (key: number, value: TValue) => void) {
        for (const k in this.map) {
            func(new Number(k).valueOf(), this.map[k])
        }
    }
    containsKey(key: number): boolean {
        return this.map[key] ? true : false
    }
}
export class StringHashMap<TValue>{
    private map: { [key: string]: TValue } = {}
    addItem(key: string, value: TValue) {
        this.map[key] = value
    }
    getItem(key: string) {
        return this.map[key]
    }
    get count(): number {
        let i = 0
        this.each(function(){
            i++
        })
        return i
    }
    // get Keys(): string[] {
    //     // let keys: string[] = []
    //     // this.each((k, v) => {
    //     //     keys.push(k)
    //     // })
    //     //return keys
    //     return this.map2.keys()
    // }
    each(func: (key: string, value: TValue) => void) {
        for (const key in this.map) {
            func(key, this.map[key])
        }
    }
    containsKey(key: string): boolean {
        return this.map[key] ? true : false
    }
    remove(key: string): void {
        delete this.map[key]
    }
    clear(): void {
        this.map = {}
    }
}

export class List<T>{
    private list: T[] = []
    push(item: T | undefined): void {
        if (item) {
            this.list.push(item)
        }
    }
    insert(index: number, item: T): void {
        this.list.splice(index, 0, item)
    }
    each(func: (item: T) => void): void {
        for (let i in this.list) {
            func(this.list[i])
        }
    }

    item(index: number) {
        return this.list[index]
    }
    toArray(): T[] {
        return this.list
    }
}
//}