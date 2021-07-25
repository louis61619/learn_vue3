
// 假如是img
// 默認是取得HTMLElement
const el = document.getElementById('el') as HTMLImageElement

el.src = ""



// 2
class Person {

}

class Student {
  studing() {

  }
}

function foo(p: Person) {
  (p as Student).studing()
}

const stu = new Student()
foo(stu)

//3. 最好不要這樣做 但是可以透過這種方式越過編譯的檢查 => as any/unknown as 其他類型
const message: string = "Hello Message"
const bar: number = message as unknown as number

export {}