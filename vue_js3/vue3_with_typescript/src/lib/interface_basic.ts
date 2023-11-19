// インタフェース定義
export interface FigureIF {
    getArea(): number;
}

// インタフェース実装クラス
export class RectArea implements FigureIF {
    constructor(private width: number, private height: number) {}
    // インタフェースメソッド実装
    getArea() {
        return this.width * this.height;
    }
}

// オブジェクトリテラル用
export interface ObjectliteralIF {
    name: string;
    age: number;
}