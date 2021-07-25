
// 聲明模塊
declare module 'lodash' {
  export function join(args: any[]): void
}


// 聲明變數 函數 類
declare let myName: string
// declare const foo: () => void
declare function foo(): void

declare class Person {
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}


// 聲明文件
declare module "*.jpeg"
declare module "*.jpg"
declare module "*.png"

declare module "*.vue" {

}

// 聲明命名空見
// 例如導出jquery的ajax
// 和模塊區別是不用import直接寫在html裡面
declare namespace $ {
  export function ajax(setting: any): any
}