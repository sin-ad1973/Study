import { Person } from './person';

export class BusinessPerson extends Person {
    // プロパティ
    protected job: string;
    // コンストラクタ
    constructor(name: string, age:number, job:string) {
        super(name, age);
        this.job = job;
    }
    // メソッド
    // オーバーライド
    show(): string {
        return super.show() + `そして仕事は${this.job}です。`;
    }
    work(): string {
        return `${this.name}はものすごく働きます`;
    }
}