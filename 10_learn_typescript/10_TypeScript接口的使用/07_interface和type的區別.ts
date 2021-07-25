document.getElementById('app') as HTMLDivElement

interface Window {
  age: number | string
}

window.age = "8888"


// type 不能重複定義
// type IFoo = {

// }

// type IFoo = {

// }

// 比較推薦使用interface