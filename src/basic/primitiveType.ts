export default function() {
  // boolean
  let isDone: boolean = false;

  // let createByNewBoolean: boolean = new Boolean(); // 报错，Boolean不是boolean类型

  let createByNewBoolean1: Boolean = new Boolean(1); // Boolean对象
  console.log(createByNewBoolean1);

  let createByNewBoolean2: boolean = Boolean(2); // boolean类型
  console.log(createByNewBoolean2);

  /**
   * 在 TypeScript 中，boolean 是 JavaScript 中的基本类型，而 Boolean 是 JavaScript 中的构造函数。
   * 其他基本类型（除了 null 和 undefined）一样，不再赘述。
   */

  // number
  const printNum = function(name: String, num: number) {
    console.log(name + ': ' + num)
  }
  let decLiteral: number= 6;
  let hexLiteral: number = 0xf00d;
  printNum('decLiteral', decLiteral);
  printNum('hexLiteral', hexLiteral);

  // ES6 中的二进制表示法
  let binaryLiteral: number = 0b1010;
  printNum('binaryLiteral', binaryLiteral);
  
  // ES6 中的八进制表示法
  let octalLiteral: number = 0o744;
  printNum('octalLiteral', octalLiteral);

  let notANumber: number = NaN;
  let infinityumber: number = Infinity;
  printNum('notANumber', notANumber);
  printNum('infinityumber', infinityumber);
  
  /**
   * 其中 0b1010 和 0o744 是 ES6 中的二进制和八进制表示法，它们会被编译为十进制数字。
   */

  // string
  let myName: string = 'Tom';
  let myAge: number = 25;

  let sentence: string = `Hello, my name is ${myName}, I'll be ${myAge} years old next month`;
  console.log(sentence);

  /**
   * 其中 ` 用来定义 ES6 中的模板字符串，${expr} 用来在模板字符串中嵌入表达式。
   */

  // void
  // JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 void 表示没有任何返回值的函数
  function alertName(): void{
    alert('My name is Tom');
  }

  // 声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null
  let unusable: void = undefined || null;

  // null 和 undefined
  let u: undefined = undefined;
  let n: null = null;
  
  // let u = 1; // 报错，undefined 类型的变量只能被赋值为 undefined，null 类型的变量只能被赋值为 null。

  // undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量
  let num: number = undefined;
  num = n;
  
  let v: void;
  // num = v; // 报错，void 类型的变量不能赋值给 number 类型的变量
}
