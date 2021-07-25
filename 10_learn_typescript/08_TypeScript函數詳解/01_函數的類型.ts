
// 函數作為參數中定義的類型
type Fun = () => void

function foo() {

}


function bar(fun: Fun) {

}

bar(foo)


// 2.
type SumFunType = (num1: number, num2: number) => number // void 是可以返回任何類型的

const sum: SumFunType = (num1: number, num2: number) => {
  return num1 + num2
}

