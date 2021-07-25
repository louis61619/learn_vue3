interface CalcFn {
  (n1: number, n2: number): number
}

function calc (num1: number, num2: number, calcFun: CalcFn) {
  return calcFun(num1, num2)
}