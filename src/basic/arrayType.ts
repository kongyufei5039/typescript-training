export default function() {
  // 数组类型

  // 「类型 + 方括号」表示法
  let fiboncci: number[] = [1, 1, 2, 3, 5];

  // 数组的项中不允许出现其他的类型
  // fiboncci = [1, '1', 2, 3, 5]; // 报错 不能将类型“string”分配给类型“number”。

  // 数组的一些方法的参数也会根据数组在定义时约定的类型进行限制
  // fiboncci.push('8') // 类型“"8"”的参数不能赋给类型“number”的参数。

  // 数组泛型
  let fiboncci1: Array<number> = [1, 1, 2, 3, 5];

  // 用接口标识数组
  interface NumbeArray {
    [index: number]: number;
  }

  let fiboncci2: NumbeArray = [1, 1, 2, 3];

  // any 在数组中的应用
  let list: any[] = ['Xcat Liu', 25, { website: 'http://xcatliu.com' }, false];

  // 类数组
  // 类数组（Array-like Object）不是数组类型，比如 arguments
  function fn1() {
    // let args: number[] = arguments;  // 报错 不能将类型“IArguments”分配给类型“number[]”。类型“IArguments”中缺少属性“pop”。
  }

  // 事实上常见的类数组都有自己的接口定义，如 IArguments, NodeList, HTMLCollection 等
  function fn2() {
    let args: IArguments = arguments;
  }
}