

// 非空斷言只能讓編譯成功 不像是可選鍊可以傳空值進去 意思就是一定假設message不為空
function printMessage(message?: string) {
  console.log(message!.length)
}

printMessage("888")