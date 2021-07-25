

function printID(id: number|string) {
  console.log(id)
  // 使用聯合類型的值需要做其他判斷
  // 專業名詞叫做 narrow(縮小)
  if(typeof id === 'string') {
    id.toLowerCase()
  }
}

printID(88)
printID(99)
