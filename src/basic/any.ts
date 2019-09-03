export default function() {
  // 任意值（Any）用来表示允许赋值为任意类型。
  let myFavoriteNumber: any = 7;
  myFavoriteNumber = 'seven';

  // 任意值得属性和方法
  let anyThing: any = 'Tom';
  console.log(anyThing.name);
  // console.log(anyThing.getName()); // ts编译通过了，但是js会报错
  
  let person: string = 'person';
  // console.log(person.name); // 报错

  // 未声明类型的变量被识别为任意值类型
  let something;
  something = 'seven';
  console.log(something);
  something = 7;
  console.log(something);
}
 