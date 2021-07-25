function sum(initNum: number, ...nums: number[]) {
  let total = 0;
  for(let item of nums) {
    total += item
  }
  console.log(initNum)
  console.log(total)
}

sum(4, 5, 9, 5)

export {}