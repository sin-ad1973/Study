<script setup lang="ts">
import { ref } from 'vue';
import { reactive } from 'vue';
import { Person } from '@/lib/person';
import { BusinessPerson } from '@/lib/business_person';
import { Triangle } from '@/lib/inherit_abstract';
import { RectArea } from '@/lib/interface_basic';
import { ThisAsType } from '@/lib/this_as_type';
import type { StructPartType } from '@/lib/interface_struct';
import { StructPartTypeImple } from '@/lib/interface_struct';
import type { Car } from '@/lib/sig_basic';
import type { PersonIF } from '@/lib/sig_prop';
import type { CalculateIF } from '@/lib/sig_call';
import type { CalculateIFM } from '@/lib/sig_method';
import type { NumberAssoc } from '@/lib/sig_index';
import type { ConstRuctSigIF } from '@/lib/sig_construct';
import { ConstRuctSigIFImple } from '@/lib/sig_construct';
import type { ObjectliteralIF } from '@/lib/interface_basic';
import type { ProductKeys } from '@/lib/keyof_basic';

defineProps<{
  msg: string
}>()

// 内部変数定義
const count = ref<number>(0);
const user = reactive({
  firstName: 'onozato' as string,
  lastName: 'makoto' as string,
  age: 50 as number,
});

// 関数定義
const onClick = () => { count.value++ };


// -----------------------------------------------------------------------------
// --- TypeScript学習用 ---------------------------------------------------------
// -----------------------------------------------------------------------------
// ------------------------------------------------------------
// 基本
// ------------------------------------------------------------
// 型宣言
let test:number;
test = 0;

// 型宣言(配列)
let tarry: string[] = ['test1', 'test2', 'test3'];
tarry[0] = 'test0';

let tarry2: readonly number[][] = [[0, 1, 2,], [3, 4, 5]];
tarry2[0][0] = 1;
// tarry2[1] = [3, 5]; // 要素自体の再代入は不可

// 型宣言(連想配列)
let tobj: {[index: string]: string} = {
  test1: 'test1',
  test2: 'test2',
  test3: 'test3',
};
tobj.test5 = 'test5';
// tobj[test] = 1;

let tobj2 = {
  test1: 'test1',
  test2: 'test2',
  test3: 'test3',
};
// tobj2.test5 = 'test5';

// 型宣言(列挙型)
enum Sex {
  MALE,
  FEMALE,
  UNKNOWN,
}
console.log(`Sex.FEMALE:${Sex.FEMALE}`);

// ------------------------------------------------------------
// 関数
// ------------------------------------------------------------
// アロー関数
let triangle = (height: number, width: number): number => {
  return height * width /2;
}
console.log(`三角形面積：${triangle(10, 5)}`);

// function関数
let printLog = function(msg: string): void {
  console.log(msg);
}
printLog('test');

// 引数渡さない(エラーになる)
let errFunc = function(msg: string): void {
  console.log(msg);
}
// errFunc();

// 引数渡さない(エラーにならない)
let optFunc = function(msg?: string): void {
  console.log(msg);
}
optFunc();

let optFunc2 = function(msg: string = 'default'): void {
  console.log(msg);
}
optFunc2();

// 引数に規定値設定
let variableLengthFunc = (...values: number[]): number => {
  let result = 0;
  values.forEach((v) => {
    result += v;
  });
  return result;
};
console.log(variableLengthFunc(1, 2, 3));

// オーバーロード
function overLoadFunc(value: number): void;
function overLoadFunc(value: boolean): void;
function overLoadFunc(value: any): void {
  if (typeof value === 'number') {
    console.log(value);
  } else {
    console.log(value ? '真' : '偽');
  }
}
overLoadFunc(1000);
overLoadFunc(true);
// overLoadFunct('test');

// オーバーロード2
function overLoadFunc2(value: number | boolean): void {
  if (typeof value === 'number') {
    console.log(value);
  } else {
    console.log(value ? '真' : '偽');
  }  
}
overLoadFunc2(1000);
overLoadFunc2(true);

// null/undeifned許容
let noNull: string | null | undefined;
console.log(noNull?.trim());
console.log(noNull??'無し');
console.log(noNull?.trim()??'無し2');

// 型エイリアス
type aliasTaple = [string, number, string];
// let aliasTest: aliasTaple = ['test1', 'test2', 'test3'];
let aliasTest: aliasTaple = ['test1', 0, 'test3'];

// 型エイリアス2
type aliasShared = string | number;
let aliasTest2: aliasShared = 'test';

// ------------------------------------------------------------
// クラス・インタフェース・継承
// ------------------------------------------------------------
// クラス
let person: Person = new Person('真', 20);
console.log(person.show());
// console.log(person.name); // privateなのでアクセス不可
console.log(person.age);
person.age = 30;
console.log(person.age);

// クラス継承、オーバーライド
let businessPerson: BusinessPerson = new BusinessPerson('真', 40, 'SE');
console.log(businessPerson.show());
console.log(businessPerson.work());

// 抽象クラス継承
let triangleObe: Triangle = new Triangle(100, 200);
console.log(triangleObe.getArea());

// インタフェース実装
let rectArea: RectArea = new RectArea(500, 500);
console.log(rectArea.getArea());

// 構造的部分型(interfaceをimplementsしなくても良い場合)
let structPartType: StructPartType = new StructPartTypeImple(10, 8);
console.log(structPartType.getArea());

// 型としてのthis
let thisAsType: ThisAsType = new ThisAsType(10);
console.log(thisAsType.plus(10).minus(5).value);

// ------------------------------------------------------------
// 型注釈としてのインタフェース
// ------------------------------------------------------------
// 型注釈としてのインタフェース
let car: Car = {
  type: 'トラック',
  run() {
    console.log(`${this.type}が走ります。`);
  }
};
car.run();

// オブジェクト型リテラル
let c1: {
  type: string;
  weight: number;
} = {
  type: '軽トラック',
  weight: 750
}
console.log(c1.weight);

// プロパティシグニチャ
let p: PersonIF = {
  name: '田中太郎'
};
// 読み取り専用なのでエラーになる
// p.name = 'テスト';

// コールシグニチャ
let add: CalculateIF = function(a: number, b: number): number {
  // 実装
  return a + b;
}
console.log(add(150, 350));

// メソッドシグニチャ
let calObj: CalculateIFM = {
  add(a: number, b: number) {
    return a + b;
  }
}
console.log(calObj.add(250, 350));

// インデックスシグニチャ
let list: NumberAssoc = {
  'hundred': 100,
  'thounsand': 1000,
};
console.log(list.hundred);

// コンストラクタシグニチャ
let constRuctSigIF: ConstRuctSigIF = ConstRuctSigIFImple;


// オブジェクトリテラル
function greet(o: ObjectliteralIF): void {
  console.log(`こんにちは、${o.name}さん`);
}
let objectLiteral1 = {
  name: '桜',
  age: 2,
  gender: 'female' // IFでは未定義
};
greet(objectLiteral1);
greet({
  name: '花',
  age: 3,
  // gender: 'female' // これはエラーになる
});

// keyofによる切り出し
function getProp(obj: ProductKeys, name: keyof ProductKeys) {
  return obj[name];
};
let productKeys = {
  name: 'お弁当',
  price: 500,
};
console.log(getProp(productKeys, 'name'));
// 以下は存在しないキーを指定しているためエラーになる
// console.log(getProp(productKeys, 'test'));


</script>

<template>
  <div>count:{{ count }}</div>
  <button @click=onClick>カウント</button>
  <div>{{ user.firstName }} {{ user.lastName }} : {{ user.age }}</div>
</template>

<style scoped>PTSCO
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
