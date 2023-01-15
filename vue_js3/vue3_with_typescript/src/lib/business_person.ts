import { Person } from './person';

export class BusinessPerson extends Person {
    // メソッド
    work(): string {
        return `${this.name}はものすごく働きます`;
    }
}