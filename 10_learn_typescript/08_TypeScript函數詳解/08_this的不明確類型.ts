

type ThisType = {name: String} 

// 指定函數內部存在this
function eating(this: ThisType) {
  console.log(this.name + " eating")
}
const info = {
  name: "Renny",
  eating: eating
}

// 隱式綁定
info.eating()

// 顯式綁定
eating.call({name: "Louis"})
eating.apply({name: "SUM"})

export {}