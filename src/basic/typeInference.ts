export default function() {
  // 类型推论
  // 如果没有明确的指定类型，那么 TypeScript 会依照类型推论（Type Inference）的规则推断出一个类型。

  let myFavoriteNumber = 'seven';
  // myFavoriteNumber = 7;

  // 等价于
  let myFavoriteNumber1: String = 'seven';
  // myFavoriteNumber1 = 7;

  // TypeScript 会在没有明确的指定类型的时候推测出一个类型，这就是类型推论。

  // 如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查
  let myFavoriteNumber2;
  myFavoriteNumber2 = 'seven';
  myFavoriteNumber2 = 7;
}
