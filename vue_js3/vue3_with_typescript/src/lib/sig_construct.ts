// コンストラクタシグニチャ
export interface ConstRuctSigIF {
    // ConstRuctSigIF型はnumber/number型を受け取るコンストラクタを持つべき
    new(width: number, height: number): ConstRuctSigIFImple;
}

export class ConstRuctSigIFImple {
    constructor(private width: number, private height: number){}
}