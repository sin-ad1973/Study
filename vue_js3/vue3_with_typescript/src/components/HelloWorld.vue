<script setup lang="ts">
import { ref } from 'vue';
import { reactive } from 'vue';
import { Person } from '../lib/person';
import { BusinessPerson } from '../lib/business_person';

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

// --- TypeScript学習用 --------------------------------------
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

// クラス
let person: Person = new Person('真', 20);
console.log(person.show());
// console.log(person.name); // privateなのでアクセス不可
console.log(person.age);
person.age = 30;
console.log(person.age);

// クラス継承
let businessPerson: BusinessPerson = new BusinessPerson('真', 40);
console.log(businessPerson.show());
console.log(businessPerson.work());

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
