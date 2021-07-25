function foo() {
  return "ooo"
}

function bar() {
  return 333
}

let flag = true
let result: unknown; // 最好不使用any // unknown可以防止變數在其他地方亂用
if(flag) {
  result = foo()
} else {
  result = bar()
}


// let message: string = result

export {}