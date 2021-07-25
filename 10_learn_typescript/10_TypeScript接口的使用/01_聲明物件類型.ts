
// type InfoType = {
//   name: string,
//   age: number
// }

// 除了type的另一種物件類型的聲明方式: interface
// 可以定義可選類型
// 可以定義只讀屬性
// 有人會在interface的名稱前面加上I
interface IInfoType {
  readonly name: string,
  age: number,
  friend?: {
    name: string
  }
}

const info: IInfoType = {
  name: "Louis",
  age: 18
}

// info.name = "" 