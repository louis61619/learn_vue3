

// 函數重載: 函數名稱相同但是參數不同

function add(num1: number, num2: number): number

function add(num1: string, num2: string): string

// 函數的重載中 函數體的實現是不能直接被調用的
function add(num1: any, num2: any): any {
  return num1 + num2
}

console.log(add(1, 2))
console.log(add("哈哈哈", "有趣"))