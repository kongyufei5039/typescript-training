export default function() {
  // 在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型。

  // TypeScript 中的接口是一个非常灵活的概念，除了可用于对类的一部分行为进行抽象以外，也常用于对「对象的形状（Shape）」进行描述。
  interface Person {
    name: string;
    age: number;
  }

  let tom: Person = {
    name: 'tome',
    age: 25
  };
  
  // 定义的变量比接口少了一些属性是不允许的
  // let tom1: Person = {
    // name: 'tom1'  // 报错
  // }

  // 多一些属性也是不允许的
  let tom2: Person = {
    name: 'tom2',
    age: 26,
    // gender: 'male' // 多了属性会报错
  };

  // 可选属性

  interface Person1 {
    name: string;
    age?: number;
  };
  let tom11: Person1 = {
    name: 'tom11',
    // age: 22
  };
  /**
   * 可选属性的含义是该属性可以不存在。
   */

  // 这时仍然不允许添加未定义的属性
  let tom12: Person1 = {
    name: 'tom12',
    // gender: 'male' // 报错，多添加了属性
  };

  // 任意属性

  interface Person2 {
    name: string;
    age?: number;
    [prop: string]: any;
  };
  let tom21: Person2 = {
    name: 'tom21',
    grander: 'male'
  }
  /**
   * 使用 [propName: string] 定义了任意属性取 string 类型的值。
   */

  // 需要注意的是，一旦定义了任意属性，那么确定属性和可选属性都必须是它的子属性
  interface Person3 {
    name: string;
    // age?: number;
    [prop: string]: string;
  }
  /**
   * 上例中，任意属性的值允许是 string，但是可选属性 age 的值却是 number，number 不是 string 的子属性，所以报错了。
   */

  // 只读属性

  interface Person4 {
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: any;
  }

  let tom41: Person4 = {
      id: 89757,
      name: 'Tom',
      gender: 'male'
  };

  // tom41.id = 9527;
  /**
   * 上例中，使用 readonly 定义的属性 id 初始化后，又被赋值了，所以报错了。
   */
  // 注意，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候
  interface Person5 {
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: any;
  }

  // let tom51: Person5 = {
  //     name: 'Tom',
  //     gender: 'male'
  // };
  /**
   * 报错 类型“{ name: string; gender: string; }”中缺少属性“id”。
   */

  // tom51.id = 89757; // 报错 无法分配到“id”，因为它是常数或只读属性。
}