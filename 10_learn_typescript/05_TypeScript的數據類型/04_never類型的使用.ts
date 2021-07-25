function foo(): never {
  while (true) {
    // 永遠不會有返回的結果
  }
}

function bar(): never {
  throw new Error();
}

function handleMessage(message: string | number) {
  switch (typeof message) {
    case 'string':
      console.log('string')
      break;
    case 'number':
      console.log('number')
      break
    default:
      // 當參數正確時無論如何不會傳到這邊 因為前面會處理 傳遞到這邊就會錯誤
      // 讓開發者不能任意加上參數
      const check: never = message
      break;
  }
}

export {}