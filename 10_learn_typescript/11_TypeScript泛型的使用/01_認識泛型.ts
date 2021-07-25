// 類型的參數化

// 在定義這個函數的參數時 部不定義類型
// 而是讓使用者告知要用甚麼類型

function sum<Type>(num1: Type): Type {
  return num1
}

sum<number>(1)
sum<object>({
  name: "Renny"
})
sum<any[]>(["87878"])

// 類型推導
sum(1)