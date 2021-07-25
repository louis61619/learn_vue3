
// 字串本身也是可以作為類型
const message: "Hello World" = "Hello World"

const num: 123 = 123


// 字面量類型可以結合聯合類型 可以作為組件傳入參數的約束
type Alignment = "center" | "right" | "left"

let align: Alignment = "center"


export {}