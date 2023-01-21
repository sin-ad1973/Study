export interface StructPartType {
    getArea(): number;
}

export class StructPartTypeImple {
    constructor(private width: number,private height: number) {};
    getArea(): number {
        return this.width * this.height;
    }
}