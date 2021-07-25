
// 類型組合的方式
// 聯合類型
// type MyType = number | string
// type Deriction = "left" | "right"

// 交叉類型
type MyType1 = number & string

interface ISwim {
  swimming: () => void
}

interface IFly {
  flying: () => void
}

type MyType2 = ISwim | IFly
type MyType3 = ISwim & IFly


const action: MyType2 = {
  swimming() {

  }
}

const action2: MyType3 ={
  swimming() {

  },
  flying() {

  }
}
