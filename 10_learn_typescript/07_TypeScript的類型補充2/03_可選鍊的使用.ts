type Person = {
  name: string
  friend?: {
    name?: String,
    age?: Number,
    girlFriend?: {

    }
  }

}

const info: Person = {
  name: "Louist",
} 


console.log(info.name)

// 透過可選鏈去判斷
console.log(info?.friend?.name)

export {}