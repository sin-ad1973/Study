// プロパティシグニチャ
export interface PersonIF {
    // 読み取り専用
    readonly name: string;
    // 省略可能
    age?: number
}