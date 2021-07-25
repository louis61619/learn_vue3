
// 可以進行類型斷言的轉化 as any
// 從類型檢測的角度來看是不安全的

let message: any = "8888"

const arr: any[] = []

message = {
  name: 8888
}

message = 33333333