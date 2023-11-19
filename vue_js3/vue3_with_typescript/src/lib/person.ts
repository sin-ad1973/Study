export class Person {
    // プロパティ
    protected name: string;
    protected _age: number;
    // コンストラクタ
    constructor(name: string, age: number) {
        this.name = name;
        this._age = age;
    }
    // メソッド
    public show(): string {
        return `${this.name}は${this.age}歳です。`;
    }
    // getter
    get age(): number {
        return this._age;
    }
    // setter
    set age(value: number) {
        if (value < 0) {
            throw new RangeError('ageプロパティは正数で指定してください');
        }
        this._age = value;
    }
}