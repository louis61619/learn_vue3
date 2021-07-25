interface IInfo {
  name: string,
  age: number
}


const info = {
  name: "Louis",
  age: 26,
  address: "88888888888"
}


// 會做一個動作 freshness 將擦除多餘的屬性 判斷剩下的屬性符合type就可以賦值
const p: IInfo = info


function printInfo(info: IInfo) {
  // 不能取出被擦除的屬性
  console.log(info)
}

// printInfo({
//   name: "Louis",
//   age: 26,
//   address: "88888888888"
// })

printInfo(info)

export {}