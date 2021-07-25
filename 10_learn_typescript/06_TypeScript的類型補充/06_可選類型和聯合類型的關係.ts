
// 當一個參數是可選類型 本質上是聯合類型 類型|undefined

// function foo(message?: string) {
//   console.log(message)
// }


function foo(message: string | undefined) {
  console.log(message)
}
foo(undefined)
// 不過使用聯合類型需要明確指定undefined

export {}