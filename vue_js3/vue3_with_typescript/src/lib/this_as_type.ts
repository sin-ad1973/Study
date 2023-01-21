// 型としてのthis
export class ThisAsType {
    constructor(private _value: number) {}
    // getter
    get value(): number {
        return this._value;
    }
    // 加算メソッド
    plus(value: number): this {
        this._value += value;
        return this;
    }
    // 減算メソッド
    minus(value: number): this {
        this._value -= value;
        return this;
    }
}