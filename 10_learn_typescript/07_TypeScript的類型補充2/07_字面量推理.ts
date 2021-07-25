const info = {
  name: "Renny",
  age: 18
}


info.name = "Louis"


type Methods = "POST" | "GET"

function request(url: string, method: Methods) {

}

// 方法一 因為method沒有具體變量 所以要經過類型斷言來約束

// const options = {
//   url: "https://google.com",
//   method: "POST"
// }
// request(options.url, options.method as Methods)


// 方法二
// as const 表示內部屬性都是只讀的
// const options = {
//   url: "https://google.com",
//   method: "POST"
// } as const
// request(options.url, options.method)


// 方法三
type Request = {
  url: string,
  method: Methods
}
const options: Request = {
  url: "https://google.com",
  method: "GET"
}



export {}