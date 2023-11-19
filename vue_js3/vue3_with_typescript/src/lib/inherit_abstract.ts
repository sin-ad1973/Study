// 抽象クラス
export abstract class Figure {
    // コンストラクタ
    constructor(protected width: number, protected height: number) {}
    // 抽象メソッド
    abstract getArea(): number;
}

// 具象クラス
export class Triangle extends Figure {
    // 抽象メソッドを実装
    getArea(): number {
        return this.width * this.height / 2;
    }
}
